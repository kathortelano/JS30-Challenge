import React from "react";
import "../styles/SortBands.css";

export const SortBands = () => {
  const bands = [
    "The Plot in You",
    "The Devil Wears Prada",
    "Pierce the Veil",
    "Norma Jean",
    "The Bled",
    "Say Anything",
    "The Midway State",
    "We Came as Romans",
    "Counterparts",
    "Oh, Sleeper",
    "A Skylit Drive",
    "Anywhere But Here",
    "An Old Dog",
  ];

  const strip = (name) => {
    return name.replace(/^(a |an |the)/gi, "").trim();
  };
  const sorted = bands.sort((a, b) => (strip(a) > strip(b) ? 1 : -1));

  return (
    <div className="band-container">
      <ul id="bands">
        {sorted.map((band, i) => {
          return <li key={i}>{band}</li>;
        })}
      </ul>
    </div>
  );
};
