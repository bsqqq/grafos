import React from "react";
import configs from './configurações'
import Graph from "react-vis-network-graph";

export default function App() {
 
  const graph = {
    nodes: [
      { id: 1, label: "roteador 1", title: "roteador", group: "roteador" },
      { id: 2, label: "Node 2", title: "node 2 tootip text", group: "computador" },
      { id: 3, label: "Node 3", title: "node 3 tootip text", group: "computador" },
      { id: 4, label: "Node 4", title: "node 4 tootip text", group: "computador" },
      { id: 5, label: "roteador 5", title: "node 5 tootip text", group: "roteador" },
      { id: 6, label: "Node 6", title: "node 6 tootip text", group: "computador" },
      { id: 7, label: "Node 7", title: "node 7 tootip text", group: "computador" },
      { id: 8, label: "Node 8", title: "node 8 tootip text", group: "computador" },
      { id: 9, label: "Node 9", title: "node 9 tootip text", group: "computador" },
      { id: 10, label: "Node 10", title: "node 10 tootip text", group: "switch" },
      { id: 11, label: "Node 11", title: "node 10 tootip text", group: "switch" },
    ],
    edges: [
      { from: 2, to: 11, label: "23" },
      { from: 3, to: 11, label: "5" },
      { from: 4, to: 11, label: "14" },
      { from: 11, to: 1, label: "14" },
      { from: 1, to: 5, label: "35" },
      { from: 5, to: 1, label: "13" },
      { from: 6, to: 10, label: "2" },
      { from: 7, to: 10, label: "8" },
      { from: 8, to: 10, label: "7" },
      { from: 9, to: 10, label: "9" },
      { from: 10, to: 5, label: "10" },
    ]
  };

  const options = {
    locale: 'pt-br',
    height: "800px",
    width: "1000px",
    manipulation: configs.manipulation,
    edges: configs.edges,
    nodes: configs.nodes,
    groups: configs.groups
  };

  const events = {
    select: function (event) {
      const { nodes, edges } = event;
    }
  };

  return (
      <Graph
        graph={graph}
        options={options}
        events={events}
        getNetwork={network => {
          //  if you want access to vis.js network api you can set the state in a parent component using this property
        }}
      />
  );
}