import React, { useCallback, useEffect, useRef, useMemo } from "react";
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  Background
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import { mockNodes, mockEdges } from "./mock.js";
import CustomNode from "./CustomNode.js";
import FloatingEdge from "./FloatingEdge.js";
// import FloatingConnectionLine from "./FloatingConnectionLine.js";

import "./index.css";
import { createForceSimulation, getInitialLayout } from "./util.js";

const LayoutFlow = () => {
  const { formattedEdges, formattedNodes, d3Nodes, d3Edges } = getInitialLayout({
    mockEdges,
    mockNodes
  });

  const [nodes, setNodes, onNodesChange] = useNodesState(formattedNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(formattedEdges);
  
  const simulationRef = useRef(null);
  const nodesDataRef = useRef(d3Nodes);

  // 定义自定义节点类型
  const nodeTypes = useMemo(() => ({ custom: CustomNode }), []);
  
  // 定义自定义边类型
  const edgeTypes = useMemo(() => ({ floating: FloatingEdge }), []);

  // 创建并启动力导向模拟
  useEffect(() => {
    // 创建力模拟
    simulationRef.current = createForceSimulation(
      nodesDataRef.current,
      d3Edges
    );

    // 每次 tick 更新节点位置
    simulationRef.current.on("tick", () => {
      setNodes((nds) =>
        nds.map((node) => {
          const d3Node = nodesDataRef.current.find((n) => n.id === node.id);
          if (d3Node) {
            return {
              ...node,
              position: {
                x: d3Node.x,
                y: d3Node.y
              }
            };
          }
          return node;
        })
      );
    });

    // 清理函数
    return () => {
      if (simulationRef.current) {
        simulationRef.current.stop();
      }
    };
  }, [setNodes]);

  // 处理节点拖动
  const handleNodeDragStart = useCallback((event, node) => {
    const d3Node = nodesDataRef.current.find((n) => n.id === node.id);
    if (d3Node && simulationRef.current) {
      // 重新加热模拟
      simulationRef.current.alphaTarget(0.3).restart();
      // 固定被拖动节点的位置
      d3Node.fx = d3Node.x;
      d3Node.fy = d3Node.y;
    }
  }, []);

  const handleNodeDrag = useCallback((event, node) => {
    const d3Node = nodesDataRef.current.find((n) => n.id === node.id);
    if (d3Node) {
      // 更新固定位置为拖动位置
      d3Node.fx = node.position.x;
      d3Node.fy = node.position.y;
    }
  }, []);

  const handleNodeDragStop = useCallback((event, node) => {
    const d3Node = nodesDataRef.current.find((n) => n.id === node.id);
    if (d3Node && simulationRef.current) {
      // 冷却模拟
      simulationRef.current.alphaTarget(0);
      // 释放节点位置约束
      d3Node.fx = null;
      d3Node.fy = null;
    }
  }, []);

  return (
    <div className="layoutflow">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeDragStart={handleNodeDragStart}
        onNodeDrag={handleNodeDrag}
        onNodeDragStop={handleNodeDragStop}
        fitView
      >
        <Background />
      </ReactFlow>
      <div className="controls">
        {/* <button onClick={() => onLayout("TB")}>vertical layout</button>
        <button onClick={() => onLayout("LR")}>horizontal layout</button> */}
      </div>
    </div>
  );
};

export default LayoutFlow;
