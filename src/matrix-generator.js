function createEmptyMatrix(graph) {
  let graph2 = [];
  for (let index = 0; index < graph.nodes.length; index++) {
    let array = [];
    array.push(0);
    for (let index = 0; index < graph.nodes.length - 1; index++) {
      array.push(0);
    }

    graph2.push(array);
  }
  console.log(graph2);
  return graph2;
}

function populateMatrix(graph, graphLocal) {
  console.log(graphLocal);
  let x;
  let y;
  let teste2;
  for (let i = 0; i < graph.nodes.length; i++) {
    for (let j = 0; j < graph.edges.length; j++) {
      if (graph.nodes[i].id === graph.edges[j].from) {
        x = graph.nodes[i].id;

        y = graph.edges[j].to;

        if (x !== y) {
          teste2 = parseInt(graph.edges[j].label);

          graphLocal[x - 1][y - 1] = teste2;
        }
      }
    }
  }

  return graphLocal;
}

export { createEmptyMatrix, populateMatrix };
