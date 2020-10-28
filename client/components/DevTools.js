import React, { useState, useRef } from "react";

export const DevTools = () => {
  const [style, setStyle] = useState({ color: "", fontSize: "" });

  const dogs = [
    { name: "Snickers", age: 2 },
    { name: "hugo", age: 8 },
  ];

  function makeGreen() {
    setStyle({ ...style, color: "#BADA55", fontSize: "50px" });
    // p.style.color = "#BADA55";
    // p.style.fontSize = "50px";
  }

  // Regular
  console.log("hello");

  // Interpolated
  //%s
  console.log("hello my name is %s", "katrina");

  // Styled
  //   %c
  //   console.log(
  //     "%c I am styled",
  //     "font-size: 50px; color: red; text-align: center;"
  //   );

  // warning!
  console.warn("not good");

  // Error :|
  console.error("this is error");

  // Info
  console.info("This is a fact");

  // Testing
  //will throw the error if first arg is false
  // if true, no message in console;
  console.assert(1 < 0, "wrong");

  // clearing
  //   console.clear();

  // Viewing DOM Elements
  const p = useRef(null);
  console.dir(p);
  console.log(p);

  // Grouping together

  dogs.forEach((dog) => {
    console.group(dog.name);
    console.log(dog.name);
    console.log(dog.age);
    console.groupEnd(dog.name);
  });

  // counting
  console.count(makeGreen);
  console.count(makeGreen);

  // timing
  const url = "https://dog.ceo/api/breeds/image/random";
  console.time("fetch data");
  fetch(url)
    .then((data) => data.json())
    .then((data) => {
      console.timeLog("fetch data"), console.log(data);
    });

  console.table(dogs);

  return (
    <div>
      <p onClick={makeGreen} style={style} ref={p}>
        ×BREAK×DOWN×
      </p>

      <p>See console for results</p>
      <code>
        const [style, setStyle] = useState(&#123; color: "", fontSize: ""
        &#125;); const dogs = [ &#123; name: "Snickers", age: 2 &#125;, &#123;
        name: "hugo", age: 8 &#125;, ]; function makeGreen() &#123;
        setStyle(&#123; ...style, color: "#BADA55", fontSize: "50px" &#126;5);
        // p.style.color = "#BADA55"; // p.style.fontSize = "50px"; &#125; //
        Regular console.log("hello"); // Interpolated //%s console.log("hello my
        name is %s", "katrina"); // Styled // %c // console.log( // "%c I am
        styled", // "font-size: 50px; color: red; text-align: center;" // ); //
        warning! console.warn("not good"); // Error :| console.error("this is
        error"); // Info console.info("This is a fact"); // Testing //will throw
        the error if first arg is false // if true, no message in console;
        console.assert(1 &gt; 0, "wrong"); // clearing // console.clear(); //
        Viewing DOM Elements const p = useRef(null); console.dir(p);
        console.log(p); // Grouping together dogs.forEach((dog) =&gt; &#123;
        console.group(dog.name); console.log(dog.name); console.log(dog.age);
        console.groupEnd(dog.name); &#125;); // counting
        console.count(makeGreen); console.count(makeGreen); // timing const url
        = "https://dog.ceo/api/breeds/image/random"; console.time("fetch data");
        fetch(url) .then((data) =&gt; data.json()) .then((data) =&gt; &#123;
        console.timeLog("fetch data"), console.log(data); &#125;);
        console.table(dogs);
      </code>
    </div>
  );
};
