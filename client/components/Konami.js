import React, { useState } from "react";
// import { render } from "react-dom";
// import { Redirect } from "react-router-dom";
import * as Components from "./index.js";

export const secretCode = "tickleme";

const Activated = () => {
  const comps = [...Object.keys(Components)];
  const random = comps[Math.floor(Math.random() * comps.length)];

  const element = Components[random]();

  return <div>{element}</div>;
};

export const Konami = () => {
  const [konamiActivate, setKonami] = useState();

  let pressed = [];
  //   let activate = [];
  //   const konami = [
  //     "ArrowUp",
  //     "ArrowUp",
  //     "ArrowDown",
  //     "ArrowDown",
  //     "ArrowLeft",
  //     "ArrowRight",
  //     "ArrowLeft",
  //     "ArrowRight",
  //     "b",
  //     "a",
  //   ];

  window.onkeyup = (event) => {
    pressed.push(event.key);

    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

    if (pressed.length < secretCode.length) {
      return;
    } else {
      activateKonami(pressed, secretCode);
    }
  };

  function activateKonami(arg1, code) {
    if (arg1.join("").includes(code)) {
      setKonami(true);
      console.log("activate");
    } else {
      setKonami(false);
    }
  }

  return (
    <div>
      {konamiActivate ? (
        <Activated />
      ) : (
        <>
          <div style={{ fontSize: "5em", color: "red" }}>
            Activate secret code
          </div>
          <span>hint: look through the links</span>
        </>
      )}
    </div>
  );
};
