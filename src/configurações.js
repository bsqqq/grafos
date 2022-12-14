let configs = {
  groups: {
    useDefaultGroups: false,
    roteador: {
      color: { background: "red" },
      borderWidth: 1,
      shape: "image",
      image:
        "https://visjs.github.io/vis-network/examples/network/img/refresh-cl/Network-Pipe-icon.png",
    },
    switch: {
      color: { background: "green" },
      borderWidth: 1,
      shape: "image",
      image:
        "https://visjs.github.io/vis-network/examples/network/img/refresh-cl/Network-Drive-icon.png",
    },
    computador: {
      color: { background: "blue" },
      borderWidth: 1,
      shape: "image",
      image:
        "https://visjs.github.io/vis-network/examples/network/img/refresh-cl/Hardware-My-Computer-3-icon.png",
    },
  },
  manipulation: {
    enabled: true,
    initiallyActive: false,
    addEdge: function (edgeData, callback) {
      edgeData.label = prompt("peso da aresta?");

      callback(edgeData);

      let graph = JSON.parse(localStorage.getItem("graph"));
      console.log(edgeData);
      let newEdge = {
        from: parseInt(prompt("De qual nó?")),
        to: parseInt(prompt("para qual nó?")),
        label: edgeData.label,
      };

      graph.edges.push(newEdge);
      localStorage.setItem("graph", JSON.stringify(graph));
    },
    editNode: function (nodeData, callback) {
      let novoNome = prompt("novo nome: (deixe em branco se não quiser mudar)");
      nodeData.label = novoNome ? novoNome : nodeData.label;
      callback(nodeData);
    },
    editEdge: function (edgeData, callback) {
      edgeData.label = prompt("Novo peso:");
      callback(edgeData);
    },
    deleteNode: true,
    deleteEdge: true,
    controlNodeStyle: {},
    addNode: function (nodeData, callback) {
      nodeData.label = prompt("Nome do novo nó:");
      nodeData.group = prompt(
        "Tipo de nó: (computador, roteador, switch)"
      ).toLowerCase();
      callback(nodeData);
      let graph = JSON.parse(localStorage.getItem("graph"));

      let newNode = {
        id: graph.nodes.length + 1,
        label: nodeData.label,
        title: `${nodeData.label} tootip text`,
        group: nodeData.group,
      };
      graph.nodes.push(newNode);

      localStorage.setItem("graph", JSON.stringify(graph));
    },
  },
  nodes: {
    borderWidth: 1,
    borderWidthSelected: 2,
    chosen: true,
    color: {
      border: "#2B7CE9",
      background: "#97C2FC",
      highlight: {
        border: "#2B7CE9",
        background: "#D2E5FF",
      },
      hover: {
        border: "#2B7CE9",
        background: "#D2E5FF",
      },
    },
    opacity: 1,
    fixed: {
      x: false,
      y: false,
    },
    font: {
      color: "",
      size: 14, // px
      face: "arial",
      background: "none",
      strokeWidth: 0, // px
      strokeColor: "#ffffff",
      align: "center",
      multi: false,
      vadjust: 0,
      bold: {
        color: "#343434",
        size: 14, // px
        face: "arial",
        vadjust: 0,
        mod: "bold",
      },
      ital: {
        color: "#343434",
        size: 14, // px
        face: "arial",
        vadjust: 0,
        mod: "italic",
      },
      boldital: {
        color: "#343434",
        size: 14, // px
        face: "arial",
        vadjust: 0,
        mod: "bold italic",
      },
      mono: {
        color: "#343434",
        size: 15, // px
        face: "courier new",
        vadjust: 2,
        mod: "",
      },
    },
    // group: undefined,
    heightConstraint: false,
    hidden: false,
    icon: {
      face: "FontAwesome",
      // code: undefined,
      // weight: undefined,
      size: 50, //50,
      color: "#2B7CE9",
    },
    // image: undefined,
    imagePadding: {
      left: 0,
      top: 0,
      bottom: 0,
      right: 0,
    },
    // label: undefined,
    labelHighlightBold: true,
    // level: undefined,
    mass: 1,
    physics: true,
    scaling: {
      min: 10,
      max: 30,
      label: {
        enabled: false,
        min: 14,
        max: 30,
        maxVisible: 30,
        drawThreshold: 5,
      },
      customScalingFunction: function (min, max, total, value) {
        if (max === min) {
          return 0.5;
        } else {
          let scale = 1 / (max - min);
          return Math.max(0, (value - min) * scale);
        }
      },
    },
    shadow: {
      enabled: false,
      color: "rgba(0,0,0,0.5)",
      size: 10,
      x: 5,
      y: 5,
    },
    shape: "circle",
    shapeProperties: {
      borderDashes: false,
      borderRadius: 6,
      interpolation: false,
      useImageSize: false,
      useBorderWithImage: false,
      coordinateOrigin: "center",
    },
    size: 25,
    widthConstraint: false,
  },
};

export default configs;
