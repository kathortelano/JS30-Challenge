import React from "react";
import { render } from "react-dom";
import { ArrayCardio1 } from "./components/ArrayCardio1";

const App = () => {
  return <ArrayCardio1 />;
};

render(React.createElement(App), document.getElementById("root"));
