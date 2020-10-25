import React, { useEffect, useState, useRef } from "react";
import "../styles/Ajax.css";

// const Display = ({ data, search }) => {
//   //   function handleMatch(wordMatch, cities) {
//   //     const regex = new RegExp(wordMatch, "gi");

//   //     return cities.filter((place) => {
//   //       return place.city.match(regex) || place.state.match(regex);
//   //     });
//   //   }

//   //   function handleDisplay(e) {
//   //     const matched = handleMatch(e.target.value, cities);
//   //     const display = document.querySelector(".suggestions");

//   //     const html = matched
//   //       .map((place) => {
//   //         const regex = new RegExp(e.target.value, "gi");
//   //         const cityName = place.city.replace(
//   //           regex,
//   //           `<span class='hl'>${e.target.value}</span>`
//   //         );

//   //         const stateName = place.state.replace(
//   //           regex,
//   //           `<span class='hl'>${e.target.value}</span>`
//   //         );

//   //         return `
//   //         <li>
//   //         <span class='name'>${cityName} ${stateName}</span>
//   //         <span class='population'>${place.population}</span>
//   //         </li>`;
//   //       })
//   //       .join("");

//   //     display.innerHTML = html;
//   //   }

// }
const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

export const Ajax = () => {
  const [display, setDisplay] = useState([]);
  const cities = [];

  const handleMatch = (wordToMatch, cities) => {
    const regex = new RegExp(wordToMatch, "gi");

    return cities.filter((place) => {
      return place.city.match(regex) || place.state.match(regex);
    });
  };

  const handleSearch = (e) => {
    const filtered = handleMatch(e.target.value, cities);

    setDisplay(filtered);
  };

  fetch(endpoint)
    .then((blob) => blob.json())
    .then((data) => cities.push(...data));

  const highlighter = (word, hl) => {
    const omitLight = word.search(hl);
    let highlighted = word.substr(omitLight, hl.length);

    return <span className="hl">{highlighted}</span>;
  };

  const inputRef = useRef(null);
  return (
    <form className="search-form">
      <input
        type="text"
        className="search"
        placeholder="City or State"
        onChange={handleSearch}
        ref={inputRef}
      />

      <ul className="suggestions">
        {display ? (
          display.map((place, key) => {
            const regex = new RegExp(inputRef.current.value, "gi");

            return (
              <li key={key}>
                <span className="name">
                  {place.city} {place.state}
                </span>
                <span className="population">{place.population}</span>
              </li>
            );
          })
        ) : (
          <>
            <li>Filter for a city</li>
            <li>or a state</li>
          </>
        )}
      </ul>
    </form>
  );
};
