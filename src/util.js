import * as d3 from "d3";
import { MarkerType } from "@xyflow/react";

const CANVAS_WIDTH = 8000;
const CANVAS_HEIGHT = 8000;
const LAYER_DISTANCE = 1500; // 每一层之间的距离 - 增大以获得更好的层级分离

// 计算每个节点的层级（距离中心的跳数）
const calculateNodeLevels = (nodes, edges) => {
  const levels = {};
  const visited = new Set();
  const queue = [];

  // 找到中心节点
  const centerNode = nodes.find(n => n.isCenter);
  if (!centerNode) return levels;

  // BFS 计算层级
  levels[centerNode.id] = 0;
  visited.add(centerNode.id);
  queue.push(centerNode.id);

  while (queue.length > 0) {
    const currentId = queue.shift();
    const currentLevel = levels[currentId];

    // 查找所有连接的节点
    edges.forEach(edge => {
      let nextNodeId = null;
      if (edge.source === currentId) {
        nextNodeId = edge.target;
      } else if (edge.target === currentId) {
        nextNodeId = edge.source;
      }

      if (nextNodeId && !visited.has(nextNodeId)) {
        levels[nextNodeId] = currentLevel + 1;
        visited.add(nextNodeId);
        queue.push(nextNodeId);
      }
    });
  }

  return levels;
};

const getFormattedNodes = (nodes) => {
  return nodes.map((node) => {
    const { id, name, x, y, width, height } = node;
    return {
      id,
      type: 'custom', // 使用自定义节点类型
      data: {
        label: name
      },
      position: {
        x,
        y
      },
      // 提供节点的预期尺寸，帮助 React Flow 更好地计算
      measured: {
        width: width || 120,
        height: height || 50
      },
      draggable: true
    };
  });
};

const getFormattedEdges = (edges) => {
  return edges.map((edge, i) => {
    return {
      id: `edge${i}`,
      source: edge?.pItem?.start?.id,
      target: edge?.pItem?.end?.id,
      type: 'floating',  // 使用 floating edge
      sourceHandle: null,  // floating edges 不使用特定的 handles
      targetHandle: null,
      style: { stroke: '#b1b1b7', strokeWidth: 2 },
      markerEnd: { type: MarkerType.ArrowClosed }
    };
  });
};

// 创建径向力导向模拟（支持多层级）
const createForceSimulation = (nodes, edges) => {
  // 计算每个节点的层级
  const nodeLevels = calculateNodeLevels(nodes, edges);
  
  // 为每个节点添加层级信息
  nodes.forEach(node => {
    node.level = nodeLevels[node.id] || 0;
  });
  
  // 为节点添加 cluster 信息
  nodes.forEach(node => {
    if (node.parentNode) {
      node.clusterId = node.parentNode;
    }
  });
  
  // 创建 cluster 中心位置映射
  const clusterCenters = {};
  nodes.forEach(node => {
    if (node.level === 1) {
      clusterCenters[node.id] = { x: 0, y: 0 };
    }
  });
  
  const simulation = d3
    .forceSimulation(nodes)
    // 排斥力：让节点互相排斥，避免过度聚集
    .force("charge", d3.forceManyBody()
      .strength((d) => {
        // 根据层级设置不同的排斥力
        if (d.level === 0) return -1000;  // 中心节点
        if (d.level === 1) return -2000;  // Service 节点强排斥
        if (d.level === 2) return -800;   // 子节点中等排斥
        return -500;
      })
    )
    // 链接力：控制连接的节点之间的距离
    .force(
      "link",
      d3.forceLink(edges)
        .id((d) => d.id)
        .distance((d) => {
          const sourceLevel = d.source.level || 0;
          const targetLevel = d.target.level || 0;
          const levelDiff = Math.abs(sourceLevel - targetLevel);
          
          if (levelDiff > 0) {
            return LAYER_DISTANCE * 0.8;
          } else {
            return LAYER_DISTANCE * 0.3;
          }
        })
        .strength(0.2)
    )
    // 径向力：将节点推向指定半径的圆周
    .force("radial", d3.forceRadial(
      (d) => {
        if (d.isCenter || d.level === 0) return 0;
        return d.level * LAYER_DISTANCE;
      },
      CANVAS_WIDTH / 2,
      CANVAS_HEIGHT / 2
    ).strength(0.9))
    // Cluster 力：子节点聚集在父节点周围
    .force("cluster", (alpha) => {
      // 更新 cluster 中心位置
      nodes.forEach(node => {
        if (node.level === 1 && clusterCenters[node.id]) {
          clusterCenters[node.id].x = node.x;
          clusterCenters[node.id].y = node.y;
        }
      });
      
      // 将子节点拉向父节点
      nodes.forEach(node => {
        if (node.clusterId && clusterCenters[node.clusterId]) {
          const center = clusterCenters[node.clusterId];
          const k = alpha * 0.1;
          node.vx += (center.x - node.x) * k;
          node.vy += (center.y - node.y) * k;
        }
      });
    })
    // 碰撞检测力：增大半径以增加间距
    .force("collide", d3.forceCollide()
      .radius((d) => {
        if (d.level === 0) return 150;
        if (d.level === 1) return 150;
        return (d.radius || 50) * 2;
      })
      .strength(0.8)
      .iterations(3)
    )
    // 中心力：将整体拉向画布中心
    .force("center", d3.forceCenter(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2).strength(0.05));

  return simulation;
};

// 获取初始布局
const getInitialLayout = ({ mockEdges = [], mockNodes = [] }) => {
  // 准备 D3 节点数据
  const d3Nodes = Object.values(mockNodes).map((mNode) => {
    const { x, y, ...rest } = mNode;
    // 为每个节点计算半径（用于碰撞检测）
    const width = rest.width || 100;
    const height = rest.height || 50;
    const radius = Math.sqrt(width * width + height * height) / 2 + 10;
    
    // 如果是中心节点，直接放在画布中心；否则随机位置
    const initialX = rest.isCenter ? CANVAS_WIDTH / 2 : Math.random() * CANVAS_WIDTH;
    const initialY = rest.isCenter ? CANVAS_HEIGHT / 2 : Math.random() * CANVAS_HEIGHT;
    
    return {
      ...rest,
      radius,
      x: initialX,
      y: initialY
    };
  });

  // 转换 mockEdges 为 D3 需要的格式
  const d3Edges = mockEdges.map((edge) => ({
    source: edge?.pItem?.start?.id,
    target: edge?.pItem?.end?.id
  }));

  // 创建临时模拟来获得初始稳定位置
  const tempSimulation = createForceSimulation(d3Nodes, d3Edges);
  
  // 运行一些 tick 来获得初始布局
  // for (let i = 0; i < 200; i++) {
  //   tempSimulation.tick();
  // }
  
  // 停止临时模拟
  tempSimulation.stop();

  // 格式化为 React Flow 需要的格式
  const formattedEdges = getFormattedEdges(Object.values(mockEdges));
  const formattedNodes = getFormattedNodes(d3Nodes);

  return {
    formattedEdges,
    formattedNodes,
    d3Nodes,  // 返回 D3 节点数据用于持续模拟
    d3Edges   // 返回 D3 边数据用于持续模拟
  };
};

export { getInitialLayout, createForceSimulation };
