import React, { useEffect, useState, useRef } from "react";
import "../styles/ShiftSelect.css";

//find selected input #1, find selected input #2
//capture shift keydown
//

export const ShiftSelect = () => {
  const [input, setInput] = useState([]);
  const inputRef = useRef(null);

  let clicks = [];

  function findSelection(array, click1) {
    const getSelected = (click2) => {
      const checkAll = array.slice(
        array.indexOf(click1),
        array.indexOf(click2) + 1
      );

      return checkAll;
    };

    return getSelected;
  }

  function selectAll(array) {
    array.forEach((input) => {
      input.checked = true;
    });
  }

  function handleClick(e) {
    var selected = [];
    if (e.target.nodeName !== "INPUT") return;
    clicks.push(e.target);

    if (e.shiftKey && e.target.nodeName === "INPUT") {
      selected = findSelection(input, clicks[0]);
      const toSelect = selected(clicks[1]);
      selectAll(toSelect);
      return;
    }
  }

  useEffect(() => {
    const elements = [...inputRef.current.children];

    const input = elements.map((element) => element.children[0]);

    setInput([...input]);
  }, []);

  return (
    <div className="inbox" ref={inputRef} onClick={handleClick}>
      <div className="item">
        <input type="checkbox" />
        <p>This is an inbox layout.</p>
      </div>
      <div className="item">
        <input type="checkbox" />
        <p>Check one item</p>
      </div>
      <div className="item">
        <input type="checkbox" />
        <p>Hold down your Shift key</p>
      </div>
      <div className="item">
        <input type="checkbox" />
        <p>Check a lower item</p>
      </div>
      <div className="item">
        <input type="checkbox" />
        <p>Everything in between should also be set to checked</p>
      </div>
      <div className="item">
        <input type="checkbox" />
        <p>Try to do it without any libraries</p>
      </div>
      <div className="item">
        <input type="checkbox" />
        <p>Just regular JavaScript</p>
      </div>
      <div className="item">
        <input type="checkbox" />
        <p>Good Luck!</p>
      </div>
      <div className="item">
        <input type="checkbox" />
        <p>Don't forget to tweet your result!</p>
      </div>
    </div>
  );
};
