import React, { useCallback } from "react";
import { ReactFlow, useNodesState, useEdgesState } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import FloatingEdge from "./edgetype/FloatingEdge";
import FloatingConnectionLine from "./edgetype/FloatingConnectionLine";
import { buildTeams } from "./utils/index";

// const nodeTypes = {
//   elk: ElkNode,
// };

const edgeTypes = {
  floating: FloatingEdge,
};
const { nodes: initialNodes, edges: initialEdges } = buildTeams();

const App = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

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
  return (
    // <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        className="react-flow-subflows-example"
        fitView
        edgeTypes={edgeTypes}
        connectionLineComponent={FloatingConnectionLine}
        // nodeTypes={nodeTypes}
      />
    // </div>
  );
};
export default App;
