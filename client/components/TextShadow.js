import React, { useState } from "react";

export const TextShadow = () => {
  const [hero, setHero] = useState({ width: null, height: null });
  const [axes, setAxes] = useState({ x: null, y: null });
  const [shadow, setShadow] = useState({
    xWalk: 10,
    yWalk: 10,
  });

  function handleMouseMove(e) {
    setAxes({ ...axes, x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });

    if (e.target.className == "hero") {
      setHero({
        ...hero,
        width: e.target.offsetWidth,
        height: e.target.offsetHeight,
      });
    } else {
      setAxes({
        ...axes,
        x: axes.x + e.target.offsetLeft,
        y: axes.y + e.target.offsetTop,
      });
      return;
    }

    moveShadow();
  }

  function moveShadow() {
    const walk = 100;
    setShadow((prevState) => {
      const setXwalk = Math.round((axes.x / hero.width) * walk - walk / 2);
      const setYwalk = Math.round((axes.y / hero.height) * walk - walk / 2);

      return { ...prevState, xWalk: setXwalk, yWalk: setYwalk };
    });
  }

  //   textShadow: `${shadow.xWalk}px ${shadow.yWalk}px 0 rgba(0,0,0,1)"`,
  return (
    <div
      className="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "black",
      }}
      onMouseMove={handleMouseMove}
    >
      <h1
        style={{
          textShadow: `${
            shadow.xWalk
          }px ${-shadow.yWalk}px 0 rgb(0, 229, 183, 0.6),
          ${-shadow.xWalk}px ${shadow.yWalk}px 0 rgb(229, 0, 214, 0.6),
          ${shadow.yWalk}px ${-shadow.xWalk}px 0 rgb(0, 156, 229, 0.6),
          ${-shadow.yWalk}px ${shadow.xWalk}px 0 rgb(57, 0, 229, 0.6)
          `,
          fontSize: "100px",
        }}
      >
        🔥WOAH!
      </h1>
    </div>
  );
};
