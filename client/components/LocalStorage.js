import React, { useEffect, useState } from "react";
import "../styles/LocalStorage.css";

export const LocalStorage = () => {
  const local = JSON.parse(localStorage.getItem("collection"));
  const [collection, setCollection] = useState(local || []);

  const [value, setValue] = useState("");
  const [item, setItem] = useState({ plate: "", done: false });

  const [display, setDisplay] = useState(false);

  //set the value of the inputs
  const handleChange = (e) => {
    if (e.target.value === "") return;
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value === "" || undefined) return;
    setItem((prevState) => {
      const newItem = { ...prevState, plate: value };
      addItem(newItem);
      return newItem;
    });

    setValue("");
  };

  const addItem = (input) => {
    if (input.plate === "") return;

    setCollection([...collection, input]);
  };

  const handleCheck = (index) => {
    setCollection((prevState) => {
      const updated = prevState.map((obj, i) => {
        if (i === index) {
          return { ...obj, done: !obj.done };
        } else return obj;
      });

      return updated;
    });
  };
  console.log(local);
  localStorage.setItem("collection", JSON.stringify(collection));

  return (
    <div className="storage-container">
      <div className="wrapper">
        <h2>LOCAL TAPAS</h2>

        <ul className="plates">
          {local && collection.length > 0 ? (
            collection.map((item, i) => {
              return (
                <li key={i}>
                  <input
                    type="checkbox"
                    data-index={i}
                    id={`item${i}`}
                    checked={item.done}
                    onChange={() => handleCheck(i)}
                  />
                  <label htmlFor={`item${i}`}>{item.plate}</label>
                </li>
              );
            })
          ) : (
            <li>Loading Tapas...</li>
          )}
        </ul>
        <form className="add-items" onSubmit={handleSubmit}>
          <input
            type="text"
            name="item"
            placeholder="Item Name"
            required
            value={value}
            onChange={handleChange}
          />
          <button type="submit">+ Add Item</button>
        </form>
      </div>
    </div>
  );
};
