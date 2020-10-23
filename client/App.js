import React from "react";
import { render } from "react-dom";
import { ArrayCardio } from "./components/ArrayCardio";

const App = () => {
  return <ArrayCardio />;
};

render(React.createElement(App), document.getElementById("root"));
