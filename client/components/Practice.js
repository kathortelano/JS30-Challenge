import React, { useEffect, useRef, useState } from "react";

export const Practice = () => {
  function calculator() {
    var inputs = [];

    return function calc(x) {
      //push inputs into an array and turn into a number
      if (inputs.length == 0) {
        inputs.push(parseInt(x));
      } else if (x === "=") {
        total = current + operand + previous;
      }

      var current = x;
      var previous = inputs.shift();
      var operand;

      return parseInt(x);
    };
  }

  var calc = calculator();
  var value = calc();

  return <h3>practice from YDKJS yet</h3>;
};
