let graph2 = [];
function createEmptyMatrix(graph) {
  for (let index = 0; index < graph.nodes.length; index++) {
    let array = [];

    for (let index = 0; index < graph.nodes.length; index++) {
      array.push(0);
    }

    graph2.push(array);
  }
}

function populateMatrix(graph) {
  let y;
  for (let i = 0; i < graph.nodes.length; i++) {
    for (let j = 0; j < graph.edges.length; j++) {
      if (graph.nodes[i].id == graph.edges[j].from) {
        let x = graph.nodes[i].id;

        y = graph.edges[j].to;

        if (x == y) {
        } else {
          let array;

          if (x == graph.edges.length) {
            array = graph2[x - 1];
          } else {
            array = graph2[x];
          }

          let teste;
          if (y == graph.edges.length) {
            teste = array[y - 1];
          } else {
            teste = array[y];
          }

          let teste2 = parseInt(graph.edges[j].label);

          graph2[x - 1][y - 1] = teste2;
        }
      }
    }
  }
  console.log(graph2);
  return graph2
}

export { createEmptyMatrix, populateMatrix };
