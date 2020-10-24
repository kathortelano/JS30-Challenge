import React from "react";
import { render } from "react-dom";
import { FlexGallery } from "./components/FlexGallery";

const App = () => {
  return <FlexGallery />;
};

render(React.createElement(App), document.getElementById("root"));
