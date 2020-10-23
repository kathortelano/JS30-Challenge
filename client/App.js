import React from "react";
import { render } from "react-dom";
import { CSSVar } from "./components/CssVars";

const App = () => {
  return <CSSVar />;
};

render(React.createElement(App), document.getElementById("root"));
