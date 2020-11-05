import React, { useEffect, useRef, useState } from "react";
import "../styles/Canvas.css";

export const Canvas = () => {
  const state = { draw: false, x: 0, y: 0, event: {}, lineWidth: 0 };
  const [drawing, setDraw] = useState(state.draw);
  const [event, setEvent] = useState(state.event);
  const [start, setStart] = useState({ x: state.x, y: state.y });
  const [end, setEnd] = useState({ x: state.x, y: state.y });

  const canvasRef = useRef(null);
  const colorRef = useRef(null);
  const lineRef = useRef(null);
  //   const randomColor = Math.floor(Math.random() * 360);

  function draw(context, drawing, event, start, end) {
    if (!drawing) return;

    context.strokeStyle = `${colorRef.current.value}`;
    context.lineWidth = lineRef.current.value;
    context.beginPath();
    //start from
    context.moveTo(event.offsetX, event.offsetY);
    //end to
    context.lineTo(end.x, end.y);

    context.stroke();

    // [start.x, start.y] = [event.offsetX, event.offsetY];
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const canvasContext = canvas.getContext("2d");

    canvasContext.lineWidth = 100;

    canvasContext.lineJoin = "round";
    canvasContext.lineCap = "round";

    draw(canvasContext, drawing, event, start, end);
  });

  return (
    <div>
      <h2 className="cavas-title">Fun with HTML canvas</h2>
      <div className="cavas-controls">
        <label htmlFor="color">Color</label>
        <input
          type="color"
          name="color"
          ref={colorRef}
          className="cavas-control color"
        />
        <label htmlFor="line">Line Width</label>
        <input
          type="range"
          name="line"
          ref={lineRef}
          className="cavas-control line"
        />
      </div>

      <canvas
        id="draw"
        width={window.innerWidth}
        height={window.innerHeight}
        ref={canvasRef}
        onMouseDown={(e) => {
          setDraw(true), setEvent(e.nativeEvent);
          // setEnd({
          //   ...end,
          //   x: start.x,
          //   y: start.y,
          // }),
          //   setStart({
          //     ...start,
          //     x: e.nativeEvent.offsetX,
          //     y: e.nativeEvent.offsetY,
          //   });
          //   [start.x, start.y] = [event.offsetX, event.offsetY];
        }}
        onMouseMove={(e) => {
          setEvent(e.nativeEvent);
          setEnd({
            ...end,
            x: e.nativeEvent.offsetX,
            y: e.nativeEvent.offsetY,
          }),
            setStart({
              ...start,
              x: e.nativeEvent.offsetX,
              y: e.nativeEvent.offsetY,
            });
        }}
        onMouseUp={(e) => {
          setDraw(false),
            setEvent(e.nativeEvent),
            setEnd({
              ...end,
              x: e.nativeEvent.offsetX,
              y: e.nativeEvent.offsetY,
            });
        }}
        onMouseOut={(e) => {
          setDraw(false);
        }}
      ></canvas>
    </div>
  );
};
