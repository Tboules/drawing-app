import React from "react";
import "./toolbar.css";

const Toolbar = () => {
  return (
    <div className="toolbar-cont">
      <h1 className="title">Toolbar</h1>
      <div className="color-picker">
        <label htmlFor="colorInput"> Color:</label>
        <input name="colorInput" type="color" />
      </div>
      <div className="size">
        <label htmlFor="size-picker">Size:</label>
        <div name="size-picker" className="size-picker">
          <button className="five"></button>
          <button className="ten"></button>
          <button className="fifteen"></button>
          <button className="twenty"></button>
          <button className="twenty-five"></button>
          <button className="thirty"></button>
        </div>
      </div>
      <div className="shape-picker"></div>
    </div>
  );
};

export default Toolbar;
