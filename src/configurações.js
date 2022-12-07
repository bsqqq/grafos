let configs = {
    groups: {
        useDefaultGroups: false,
        roteador: { color: { background: 'red' }, borderWidth: 1, shape: 'image', image: "https://visjs.github.io/vis-network/examples/network/img/refresh-cl/Network-Pipe-icon.png" },
        switch: { color: { background: 'green' }, borderWidth: 1, shape: 'image', image: "https://visjs.github.io/vis-network/examples/network/img/refresh-cl/Network-Drive-icon.png" },
        computador: { color: { background: 'blue' }, borderWidth: 1, shape: 'image', image: "https://visjs.github.io/vis-network/examples/network/img/refresh-cl/Hardware-My-Computer-3-icon.png" },
    },
    manipulation: {
        enabled: true,
        initiallyActive: false,
        addEdge: function(edgeData, callback) {
            edgeData.label = prompt("peso da aresta?")
            callback(edgeData)

            let graph = JSON.parse(localStorage.getItem("graph"))
            console.log(edgeData)
            let newEdge = { 
                from: graph.nodes.length + 1, 
                to: edgeData.to, 
                label: edgeData.label
            }
            graph.edges.push(newEdge)
            localStorage.setItem("graph", JSON.stringify(graph))
        },
        editNode: function(nodeData, callback) {
            let novoNome = prompt("novo nome: (deixe em branco se não quiser mudar)")
            nodeData.label =  novoNome ? novoNome : nodeData.label
            // let novoTipo = prompt("mudar o tipo de nó? (deixe em branco se não quiser mudar)").toLowerCase()
            // nodeData.group = novoTipo ? novoTipo : nodeData.group
            callback(nodeData)
        },
        editEdge: function (edgeData, callback) {
            edgeData.label = prompt("Novo peso:")
            callback(edgeData)
        },
        deleteNode: true,
        deleteEdge: true,
        controlNodeStyle: {
            // all node options are valid.
        },
        addNode: function(nodeData,callback) {
            nodeData.label = prompt("Nome do novo nó:");
            nodeData.group = prompt("Tipo de nó: (computador, roteador, switch)").toLowerCase()
            callback(nodeData);
            let graph = JSON.parse(localStorage.getItem("graph"))

            let newNode = {
                id: graph.nodes.length + 1,
                label: nodeData.label,
                title: `${nodeData.label} tootip text`,
                group: nodeData.group
            }
            graph.nodes.push(newNode)

            localStorage.setItem("graph", JSON.stringify(graph))
          }
    },
    // edges: {
    //     arrows: {
    //         to: {
    //             enabled: false,
    //             // imageHeight: undefined,
    //             // imageWidth: undefined,
    //             scaleFactor: 10,
    //             // src: undefined,
    //             type: "arrow"
    //         },
    //         middle: {
    //             enabled: false,
    //             imageHeight: 32,
    //             imageWidth: 32,
    //             scaleFactor: 1,
    //             // src: "https://visjs.org/images/visjs_logo.png",
    //             // type: "image"
    //         },
    //         from: {
    //             enabled: false,
    //             // imageHeight: undefined,
    //             // imageWidth: undefined,
    //             scaleFactor: 10,
    //             // src: undefined,
    //             type: "arrow"
    //         }
    //     },
    //     endPointOffset: {
    //         from: 0,
    //         to: 0
    //     },
    //     arrowStrikethrough: true,
    //     chosen: true,
    //     color: {
    //         color: '#848484',
    //         highlight: '#848484',
    //         hover: '#848484',
    //         inherit: 'from',
    //         opacity: 1.0
    //     },
    //     dashes: false,
    //     font: {
    //         color: '#343434',
    //         size: 14, // px
    //         face: 'arial',
    //         background: 'none',
    //         strokeWidth: 2, // px
    //         strokeColor: '#ffffff',
    //         align: 'horizontal',
    //         multi: false,
    //         vadjust: 0,
    //         bold: {
    //             color: '#343434',
    //             size: 14, // px
    //             face: 'arial',
    //             vadjust: 0,
    //             mod: 'bold'
    //         },
    //         ital: {
    //             color: '#343434',
    //             size: 14, // px
    //             face: 'arial',
    //             vadjust: 0,
    //             mod: 'italic',
    //         },
    //         boldital: {
    //             color: '#343434',
    //             size: 14, // px
    //             face: 'arial',
    //             vadjust: 0,
    //             mod: 'bold italic'
    //         },
    //         mono: {
    //             color: '#343434',
    //             size: 15, // px
    //             face: 'courier new',
    //             vadjust: 2,
    //             mod: ''
    //         }
    //     },
    //     hidden: false,
    //     hoverWidth: 1.5,
    //     // label: undefined,
    //     labelHighlightBold: true,
    //     // length: undefined,
    //     physics: true,
    //     scaling: {
    //         min: 1,
    //         max: 15,
    //         label: {
    //             enabled: true,
    //             min: 14,
    //             max: 30,
    //             maxVisible: 30,
    //             drawThreshold: 5
    //         },
    //         customScalingFunction: function (min, max, total, value) {
    //             if (max === min) {
    //                 return 0.5;
    //             }
    //             else {
    //                 var scale = 1 / (max - min);
    //                 return Math.max(0, (value - min) * scale);
    //             }
    //         }
    //     },
    //     selectionWidth: 1,
    //     selfReferenceSize: 20,
    //     selfReference: {
    //         size: 20,
    //         angle: Math.PI / 4,
    //         renderBehindTheNode: true
    //     },
    //     shadow: {
    //         enabled: false,
    //         color: 'rgba(0,0,0,0.5)',
    //         size: 10,
    //         x: 5,
    //         y: 5
    //     },
    //     smooth: {
    //         enabled: true,
    //         type: "dynamic",
    //         roundness: 0.5
    //     },
    //     // title: undefined,
    //     // value: undefined,
    //     width: 1,
    //     widthConstraint: false
    // },
    nodes: {
        borderWidth: 1,
        borderWidthSelected: 2,
        // brokenImage: undefined,
        chosen: true,
        color: {
            border: '#2B7CE9',
            background: '#97C2FC',
            highlight: {
                border: '#2B7CE9',
                background: '#D2E5FF'
            },
            hover: {
                border: '#2B7CE9',
                background: '#D2E5FF'
            }
        },
        opacity: 1,
        fixed: {
            x: false,
            y: false
        },
        font: {
            color: '',
            size: 14, // px
            face: 'arial',
            background: 'none',
            strokeWidth: 0, // px
            strokeColor: '#ffffff',
            align: 'center',
            multi: false,
            vadjust: 0,
            bold: {
                color: '#343434',
                size: 14, // px
                face: 'arial',
                vadjust: 0,
                mod: 'bold'
            },
            ital: {
                color: '#343434',
                size: 14, // px
                face: 'arial',
                vadjust: 0,
                mod: 'italic',
            },
            boldital: {
                color: '#343434',
                size: 14, // px
                face: 'arial',
                vadjust: 0,
                mod: 'bold italic'
            },
            mono: {
                color: '#343434',
                size: 15, // px
                face: 'courier new',
                vadjust: 2,
                mod: ''
            }
        },
        // group: undefined,
        heightConstraint: false,
        hidden: false,
        icon: {
            face: 'FontAwesome',
            // code: undefined,
            // weight: undefined,
            size: 50,  //50,
            color: '#2B7CE9'
        },
        // image: undefined,
        imagePadding: {
            left: 0,
            top: 0,
            bottom: 0,
            right: 0
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
                drawThreshold: 5
            },
            customScalingFunction: function (min, max, total, value) {
                if (max === min) {
                    return 0.5;
                }
                else {
                    let scale = 1 / (max - min);
                    return Math.max(0, (value - min) * scale);
                }
            }
        },
        shadow: {
            enabled: false,
            color: 'rgba(0,0,0,0.5)',
            size: 10,
            x: 5,
            y: 5
        },
        shape: 'circle',
        shapeProperties: {
            borderDashes: false, // only for borders
            borderRadius: 6,     // only for box shape
            interpolation: false,  // only for image and circularImage shapes
            useImageSize: false,  // only for image and circularImage shapes
            useBorderWithImage: false,  // only for image shape
            coordinateOrigin: 'center'  // only for image and circularImage shapes
        },
        size: 25,
        // title: undefined,
        // value: undefined,
        widthConstraint: false,
        // x: undefined,
        // y: undefined
    }

}

export default configs