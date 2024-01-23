import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { MyCytoscapeComponent } from "./CytoScape";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <MyCytoscapeComponent />
      </div>
    </>
  );
}

export default App;
