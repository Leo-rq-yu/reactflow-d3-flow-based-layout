import * as d3 from "d3";

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
      }
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

const simulateGraph = ({ mockEdges = [], mockNodes = [] }) => {
  const nodes = Object.values(mockNodes).map((mNode) => {
    console.log("--mNode: ", JSON.parse(JSON.stringify(mNode)));

    // if (mNode.name === "start") return mNode;
    const { x, y, ...rest } = mNode;
    return rest;
  });

  const edges = mockEdges;
  const width = 800;
  const height = 600;

  // Create the force-directed layout
  const simulation = d3
    .forceSimulation()
    .force("charge", d3.forceManyBody())
    .force(
      "link",
      d3.forceLink().id((d) => d.id)
    )
    .force("center", d3.forceCenter(width / 2, height / 2));

  // Add the nodes and edges to the simulation
  simulation.nodes(nodes);
  simulation.force("link").links(edges);

  for (let i = 0; i < 100; i++) {
    simulation.tick();
  }

  const formattedEdges = getFormattedEdges(Object.values(edges));
  const formattedNodes = getFormattedNodes(simulation.nodes());

  // Create a new D3.js force-directed layout
  // const layout = d3.layout
  //   .force()
  //   // Set the nodes and edges of the graph
  //   .nodes(nodes)
  //   .links(edges)
  //   // Set the flow direction of the graph
  //   .linkDirectionalFlow("source")
  //   // Generate the node positions
  //   .run();

  // // The node positions are now available in the layout
  // console.log('--layout nodes: ', layout.nodes());

  return {
    formattedEdges,
    formattedNodes
  };
};

export { simulateGraph };
