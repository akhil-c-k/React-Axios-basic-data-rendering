import React from "react";
import ReactDOM from "react-dom";
import Cardview from "./components/Cardview";

function App() {
  return (
    <div className="App">
      <Cardview />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
