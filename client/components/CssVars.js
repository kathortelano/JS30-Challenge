import React from "react";
import "../styles/cssVariables.css";

export const CSSVar = () => {
  function handleChange(e) {
    document.documentElement.style.setProperty(
      `--${e.target.name}`,
      `${e.target.value + (e.target.getAttribute("data-sizing") || "")}`
    );
  }

  return (
    <div id="root">
      <h2>
        Update CSS Variables with <span className="hl">JS</span>
      </h2>

      <div className="controls">
        <label htmlFor="spacing">Spacing:</label>
        <input
          className="setting"
          id="spacing"
          type="range"
          name="spacing"
          min="10"
          max="200"
          defaultValue="10"
          data-sizing="px"
          onChange={handleChange}
        />

        <label htmlFor="blur">Blur:</label>
        <input
          className="setting"
          id="blur"
          type="range"
          name="blur"
          min="0"
          max="25"
          defaultValue="10"
          data-sizing="px"
          onChange={handleChange}
        />

        <label htmlFor="base">Base Color:</label>
        <input
          className="setting"
          id="base"
          type="color"
          name="base"
          defaultValue="#ffc600"
          onChange={handleChange}
        />
      </div>

      <img
        className="image"
        src="https://source.unsplash.com/7bwQXzbF6KE/800x500"
      />
    </div>
  );
};

export default CSSVar;
