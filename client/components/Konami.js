import React, { useEffect, useState } from "react";
// import { render } from "react-dom";
// import { Redirect } from "react-router-dom";
// import * as Components from "./index.js";

export const secretCode = "tickleme";

const Activated = () => {
  const [color, setColor] = useState("");
  const handleClick = () => {
    setColor(
      `#${(0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6)}`
    );
  };

  return (
    <div
      onClick={handleClick}
      style={{ backgroundColor: `${color}`, height: "100vh", width: "100vw" }}
    >
      <h1 style={{ textAlign: "center" }}>YOU ACTIVATED MY SECRET CODE!</h1>
      <p> start clicking!</p>
    </div>
  );
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

  useEffect(() => {});

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
