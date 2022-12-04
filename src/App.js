import React from "react";
import configs from "./configurações";
import Graph from "react-vis-network-graph";
import fordFulkerson from "./ford-fulkeson";
import { populateMatrix, createEmptyMatrix } from "./matrix-generator";


export default function App() {
  const graph = {
    nodes: [
      { id: 1, label: "roteador 1", title: "roteador", group: "roteador" },
      {
        id: 2,
        label: "Node 2",
        title: "node 2 tootip text",
        group: "computador",
      },
      {
        id: 3,
        label: "Node 3",
        title: "node 3 tootip text",
        group: "computador",
      },
      {
        id: 4,
        label: "Node 4",
        title: "node 4 tootip text",
        group: "computador",
      },
      {
        id: 5,
        label: "roteador 5",
        title: "node 5 tootip text",
        group: "roteador",
      },
      {
        id: 6,
        label: "Node 6",
        title: "node 6 tootip text",
        group: "computador",
      },
    ],
    edges: [
      { from: 1, to: 2, label: "16" },
      { from: 1, to: 3, label: "13" },
      { from: 2, to: 3, label: "10" },
      { from: 2, to: 4, label: "12" },
      { from: 3, to: 2, label: "4" },
      { from: 3, to: 5, label: "14" },
      { from: 4, to: 3, label: "9" },
      { from: 4, to: 6, label: "20" },
      { from: 5, to: 4, label: "7" },
      { from: 5, to: 6, label: "4" },
    ],
  };

  

  

  createEmptyMatrix(graph);
  let graphPopulated = populateMatrix(graph);
  fordFulkerson(graphPopulated, 0, 5);

  const options = {
    locale: "pt-br",
    height: "800px",
    width: "1000px",
    manipulation: configs.manipulation,
    edges: configs.edges,
    nodes: configs.nodes,
    groups: configs.groups,
  };

  const events = {
    select: function (event) {
      const { nodes, edges } = event;
    },
  };

  return (
    <Graph
      graph={graph}
      options={options}
      events={events}
      getNetwork={(network) => {
        //  if you want access to vis.js network api you can set the state in a parent component using this property
      }}
    />
  );
}
