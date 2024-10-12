import React, { useCallback, useState } from "react";
import { ReactFlow, useNodesState, useEdgesState } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { buildTeams } from "./utils/index";

// const nodeTypes = {
//   elk: ElkNode,
// };

// const edgeTypes = {
//   floating: FloatingEdge,
// };
const { nodes: initialNodes, edges: initialEdges } = buildTeams();

const App = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [hoveredNode, setHoveredNode] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge(
          {
            ...params,
            type: "floating",
            markerEnd: { type: MarkerType.Arrow },
          },
          eds
        )
      ),
    [setEdges]
  );

  const onNodeMouseEnter = useCallback((event, node) => {
    setHoveredNode(node);
    const rect = event.target.getBoundingClientRect();
    setMousePosition({ x: rect.right, y: rect.top });
  });

  const onNodeMouseLeave = useCallback(() => {
    setHoveredNode(null);
  });
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
      <h1 style={{ margin: "20px 0" }}>Flow Chart Example</h1>{" "}
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeMouseEnter={onNodeMouseEnter}
        onNodeMouseLeave={onNodeMouseLeave}
        onConnect={onConnect}
        className="react-flow-subflows-example"
        fitView
        // edgeTypes={edgeTypes}
        // nodeTypes={nodeTypes}
      >
        {hoveredNode?.data?.label && (
          <div
            style={{
              position: "absolute",
              zIndex: 10000,
              top: mousePosition.y-90 , // Slight offset from the element
              left: mousePosition.x-30,
              padding: "5px 10px",
              background: "black",
              color: "white",
              borderRadius: "4px",
            }}
          >
            {hoveredNode.data.label}
          </div>
        )}
      </ReactFlow>
    </div>
    </div>
  );
};
export default App;
