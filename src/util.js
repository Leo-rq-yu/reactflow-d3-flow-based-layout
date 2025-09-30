import * as d3 from "d3";

const CANVAS_WIDTH = 1600;
const CANVAS_HEIGHT = 1200;

const getFormattedNodes = (nodes) => {
  return nodes.map((node) => {
    const { id, name, x, y } = node;
    return {
      id,
      data: {
        label: name
      },
      position: {
        x,
        y
      },
      draggable: true
    };
  });
};

const getFormattedEdges = (edges) => {
  return edges.map((edge, i) => {
    return {
      id: `edge${i}`,
      target: edge?.pItem?.start?.id,
      source: edge?.pItem?.end?.id,
      markerStart: { type: "arrowclosed" }
    };
  });
};

// 创建径向力导向模拟
const createForceSimulation = (nodes, edges) => {
  const RADIAL_DISTANCE = 300; // 围绕中心节点的半径距离
  
  const simulation = d3
    .forceSimulation(nodes)
    // 排斥力：让节点互相排斥，避免聚集
    .force("charge", d3.forceManyBody().strength(-500))
    // 链接力：控制连接的节点之间的距离
    .force(
      "link",
      d3.forceLink(edges)
        .id((d) => d.id)
        .distance(RADIAL_DISTANCE) // 链接距离与径向距离一致
        .strength(0.3) // 较弱的链接力，让径向力起主导作用
    )
    // 径向力：关键！将节点推向指定半径的圆周
    .force("radial", d3.forceRadial(
      (d) => d.isCenter ? 0 : RADIAL_DISTANCE, // 中心节点半径为0，其他节点在固定半径
      CANVAS_WIDTH / 2,  // 中心 X 坐标
      CANVAS_HEIGHT / 2  // 中心 Y 坐标
    ).strength(0.8)) // 较强的径向力确保节点保持在圆周上
    // 碰撞检测力：防止节点重叠
    .force("collide", d3.forceCollide()
      .radius((d) => d.radius || 50)
      .strength(0.7) // 稍微降低碰撞力，让径向布局更流畅
      .iterations(2)
    )
    // 中心力：将整体拉向画布中心
    .force("center", d3.forceCenter(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2));

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
  for (let i = 0; i < 300; i++) {
    tempSimulation.tick();
  }
  
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
