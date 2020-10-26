import React from "react";
import { Link, Switch, Route, BrowserRouter } from "react-router-dom";
import {
  Canvas,
  Ajax,
  ArrayCardio1,
  ArrCardio2,
  CSSVar,
  FlexGallery,
} from "./components/index.js";

const Nav = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/flex-gallery">Flex Gallery</Link>
      </li>
      <li>
        <Link to="/canvas">Canvas</Link>
      </li>
      <li>
        <Link to="/ajax">Ajax</Link>
      </li>
      <li>
        <Link to="/array-cardio">Array Cardio</Link>
      </li>
      <li>
        <Link to="/css-var">CSS Variables</Link>
      </li>
    </ul>
  );
};

function Home() {
  return <div>Home</div>;
}

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/ajax">
            <Ajax />
          </Route>
          <Route path="/canvas">
            <Canvas />
          </Route>
          <Route path="/flex-gallery">
            <FlexGallery />
          </Route>
          <Route path="/array-cardio">
            <ArrayCardio1 />
            <ArrCardio2 />
          </Route>
          <Route path="/canvas">
            <Canvas />
          </Route>
          <Route path="/css-var">
            <CSSVar />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default App;
