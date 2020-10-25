import React, { useEffect } from "react";
import "../styles/Ajax.css";

export const Ajax = () => {
  const cities = [];

  const endpoint =
    "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

  function handleMatch(wordMatch, cities) {
    const regex = new RegExp(wordMatch, "gi");

    return cities.filter((place) => {
      return place.city.match(regex) || place.state.match(regex);
    });
  }

  function handleDisplay(e) {
    const matched = handleMatch(e.target.value, cities);
    const display = document.querySelector(".suggestions");

    const html = matched
      .map((place) => {
        const regex = new RegExp(e.target.value, "gi");
        const cityName = place.city.replace(
          regex,
          `<span class='hl'>${e.target.value}</span>`
        );

        const stateName = place.state.replace(
          regex,
          `<span class='hl'>${e.target.value}</span>`
        );

        return `
        <li>
        <span class='name'>${cityName} ${stateName}</span>
        <span class='population'>${place.population}</span>
        </li>`;
      })
      .join("");

    display.innerHTML = html;
  }

  useEffect(() => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) =>
        //return copy of data in array
        Array.isArray(data)
          ? data.map((obj) => {
              cities.push(obj);
            })
          : null
      );
  }, [endpoint]);

  return (
    <form className="search-form">
      <input
        type="text"
        className="search"
        placeholder="City or State"
        onChange={handleDisplay}
      />

      <ul className="suggestions">
        <li>Filter for a city</li>
        <li>or a state</li>
      </ul>
    </form>
  );
};
