import React from "react";
import { render } from "react-dom";
import { Ajax } from "./components/Ajax";

const App = () => {
  return <Ajax />;
};

render(React.createElement(App), document.getElementById("root"));
