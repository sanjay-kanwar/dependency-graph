import React from 'react';
import ReactFlow, { MiniMap, Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes = [
  // Release 1 and 2 nodes
  { id: 'release1', data: { label: 'Release 1' }, position: { x: 100, y: 50 }, style: { width: 100, padding: 10 }, type: 'default' },
  { id: 'release2', data: { label: 'Release 2' }, position: { x: 300, y: 50 }, style: { width: 100, padding: 10 }, type: 'default' },

  // Team 1 services (for release 1 and 2)
  { id: 'service1-release1', data: { label: 'Service 1 (Team 1)' }, position: { x: 100, y: 150 }, style: { width: 150, padding: 10 }, type: 'default' },
  { id: 'service1-release2', data: { label: 'Service 3 (Team 1)' }, position: { x: 300, y: 150 }, style: { width: 150, padding: 10 }, type: 'default' },

  // Team 2 services (for release 1 and 2)
  { id: 'service2-release1', data: { label: 'Service 2 (Team 2)' }, position: { x: 100, y: 250 }, style: { width: 150, padding: 10 }, type: 'default' },
  { id: 'service2-release2', data: { label: 'Service 4 (Team 2)' }, position: { x: 300, y: 250 }, style: { width: 150, padding: 10 }, type: 'default' },
];

const initialEdges = [
  // Edges for Release 1
  { id: 'e1', source: 'service1-release1', target: 'release1', type: 'smoothstep', animated: true },
  { id: 'e2', source: 'service2-release2', target: 'release1', type: 'smoothstep', animated: true },

  // Edges for Release 2
  { id: 'e3', source: 'release2', target: 'service1-release2', type: 'smoothstep', animated: true },
  { id: 'e4', source: 'release2', target: 'service2-release2', type: 'smoothstep', animated: true },
];

const App = () => {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        fitView
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default App;
