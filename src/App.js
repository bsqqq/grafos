import React from "react";
import configs from './configurações'
import Graph from "react-vis-network-graph";

// import "./styles.css";
// need to import the vis network css in order to show tooltip
// import "./network.css";

export default function App() {
  const opcoes = {
    groups: {
      myGroup: {color:{background:'red'}, borderWidth:3}
    }
  }
  const graph = {
    nodes: [
      { id: 1, label: "Router 1", title: "Router", group: "Routers" },
      { id: 2, label: "Node 2", title: "node 2 tootip text" },
      { id: 3, label: "Node 3", title: "node 3 tootip text" },
      { id: 4, label: "Node 4", title: "node 4 tootip text" },
      { id: 5, label: "Router 5", title: "node 5 tootip text", group: "Routers" },
      { id: 6, label: "Node 6", title: "node 6 tootip text" },
      { id: 7, label: "Node 7", title: "node 7 tootip text" },
      { id: 8, label: "Node 8", title: "node 8 tootip text" },
      { id: 9, label: "Node 9", title: "node 9 tootip text" }
    ],
    edges: [
      { from: 2, to: 1 },
      { from: 3, to: 1 },
      { from: 4, to: 1 },
      { from: 1, to: 5 },
      { from: 5, to: 1 },
      { from: 6, to: 5 },
      { from: 7, to: 5 },
      { from: 8, to: 5 },
      { from: 9, to: 5 },

    ]
  };

  const options = {
    locale: 'pt-br',
    height: "800px",
    width: "800px",
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