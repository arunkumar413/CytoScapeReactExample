import React, { useEffect, useRef } from "react";
import cytoscape from "cytoscape";
import dagre from 'cytoscape-dagre';

export const MyCytoscapeComponent = () => {
  const cyContainerRef = useRef(null);

  cytoscape.use( dagre );

  useEffect(() => {
    const cy = cytoscape({
      container: cyContainerRef.current,
      elements: {
        nodes: [
          { data: { id: "Fruits", label: "Fruits" } },
          { data: { id: "Apple", label: "Apple" } },
          { data: { id: "Mango", label: "Mango" } },
          { data: { id: "Banana", label: "Banana" } },
          { data: { id: "Vegetables", label: "Vegetables" } },
          { data: { id: "Tomato", label: "Tomato" } },
          { data: { id: "Potato", label: "Potato" } },
          { data: { id: "Cauli flower", label: "Cauli flower" } },




        ],
        edges: [
          { data: { source: "Fruits", target: "Apple", label: "" } },
          { data: { source: "Fruits", target: "Mango", label: "" } },
          { data: { source: "Fruits", target: "Banana", label: "" } },
          { data: { source: "Vegetables", target: "Tomato", label: "" } },
          { data: { source: "Vegetables", target: "Potato", label: "" } },
          { data: { source: "Vegetables", target: "Cauli flower", label: "" } },



        ],
      },
      style: [
        {
          selector: "node",
          style: {
            label: "data(label)",
            backgroundColor: "grey",
            shape: "round-rectangle",
            width: 100,
            height: 100,
            "text-halign": "center",
            "text-valign": "center",
            color: "white",
          },
        },
        {
          selector: "edge",
          style: {
            label: "data(label)",
            "curve-style": "taxi",
            "target-arrow-shape": "triangle",
          },
        },

        {
          selector: 'node[id = "Vegetables"]',
          style:{
          backgroundColor:'green'
          }
        },
        {
          selector: 'node[id = "Fruits"]',
          style:{
          backgroundColor:'blue'
          }
        }
      ],
      layout: {
        name: "dagre",
        fit: true,
        avoidOverlap: true,
        // rows: 10,
        // cols: 10,
      },
    });

    // Cleanup function
    return () => {
      cy.destroy();
    };
  }, []);

  return (
    <div ref={cyContainerRef} style={{ width: "100%", height: "100vh" }} />
  );
};
