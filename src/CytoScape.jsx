import React, { useEffect, useRef } from "react";
import cytoscape from "cytoscape";

export const MyCytoscapeComponent = () => {
  const cyContainerRef = useRef(null);

  useEffect(() => {
    const cy = cytoscape({
      container: cyContainerRef.current,
      elements: {
        nodes: [
          { data: { id: "a", label: "Node A" } },
          { data: { id: "b", label: "Node B" } },
          { data: { id: "c", label: "Node C" } },
          { data: { id: "d", label: "Node D" } },
        ],
        edges: [
          { data: { source: "a", target: "b", label: "A to B" } },
          { data: { source: "b", target: "c", label: "B to C" } },
          { data: { source: "a", target: "d", label: "A to D" } },
        ],
      },
      style: [
        {
          selector: "node",
          style: {
            label: "data(label)",
            backgroundColor: "teal",
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
      ],
      layout: { name: "circle", rows: 2, columns: 2 },
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
