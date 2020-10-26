import "../styles/FlexGallery.css";
import React, { useEffect, useState } from "react";

export const FlexGallery = () => {
  function handleOpen() {
    this.classList.toggle("open");
    // this.querySelector(":first-child").classList.toggle("open-active");
    // this.querySelector(":last-child").classList.toggle("open-active");
  }

  function handleActive(e) {
    if (e.propertyName.includes("flex")) {
      this.classList.toggle("open-active");
    }
  }

  //need to wait for component to mount
  useEffect(() => {
    const panels = document.querySelectorAll(".panel");

    // panels.forEach((panel) => {
    //   panel.addEventListener("onmouseover", handleOpen);
    // });

    panels.forEach((panel) => {
      panel.addEventListener("transitionend", handleActive);
    });
  });

  return (
    <div className="panels">
      <div className="panel panel1">
        <p>Hey</p>
        <p>Let's</p>
        <p>Dance</p>
      </div>
      <div className="panel panel2">
        <p>Give</p>
        <p>Take</p>
        <p>Receive</p>
      </div>
      <div className="panel panel3">
        <p>Experience</p>
        <p>It</p>
        <p>Today</p>
      </div>
      <div className="panel panel4">
        <p>Give</p>
        <p>All</p>
        <p>You can</p>
      </div>
      <div className="panel panel5">
        <p>Life</p>
        <p>In</p>
        <p>Motion</p>
      </div>
    </div>
  );
};
