import React from "react";
import { render } from "react-dom";
import { Canvas } from "./components/Canvas";

const App = () => {
  return <Canvas />;
};

render(React.createElement(App), document.getElementById("root"));
