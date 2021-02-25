import React, { useRef } from "react";
import { useCanvas } from "../../context/CanvasContext";
import "./toolbar.css";

const Toolbar = () => {
  const {
    color,
    setDrawWidth,
    setColor,
    lineShape,
    setLineShape,
    resetDrawing,
  } = useCanvas();

  const shape = lineShape === "round" ? "50%" : "0";

  const handleSizeChange = (e) => {
    let size = e.target.dataset.size;
    setDrawWidth(Number(size));
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleLineShapeChange = (e) => {
    if (e.target.innerText === "Square") {
      setLineShape("butt");
    } else {
      setLineShape("round");
    }
  };

  return (
    <div className="toolbar-cont">
      <h1 className="title">Toolbar</h1>
      <div className="color-picker">
        <label htmlFor="colorInput"> Color:</label>
        <input name="colorInput" type="color" onChange={handleColorChange} />
      </div>
      <div className="line-shape">
        <label htmlFor="line-shape-buttons">Stroke Shape:</label>
        <div className="line-shape-buttons" name="line-shape-buttons">
          <button onClick={handleLineShapeChange}>Square</button>
          <button onClick={handleLineShapeChange}>Circle</button>
        </div>
      </div>
      <div className="size">
        <label htmlFor="size-picker">Size:</label>
        <div name="size-picker" className="size-picker">
          <button data-size="5" className="five" onClick={handleSizeChange}>
            <div
              data-size="5"
              style={{
                backgroundColor: `${color}`,
                width: "5px",
                height: "5px",
                margin: "auto",
                borderRadius: `${shape}`,
              }}
            />
          </button>
          <button data-size="10" className="ten" onClick={handleSizeChange}>
            <div
              data-size="10"
              style={{
                backgroundColor: `${color}`,
                width: "10px",
                height: "10px",
                margin: "auto",
                borderRadius: `${shape}`,
              }}
            />
          </button>
          <button data-size="15" className="fifteen" onClick={handleSizeChange}>
            <div
              data-size="15"
              style={{
                backgroundColor: `${color}`,
                width: "15px",
                height: "15px",
                margin: "auto",
                borderRadius: `${shape}`,
              }}
            />
          </button>
          <button data-size="20" className="twenty" onClick={handleSizeChange}>
            <div
              data-size="20"
              style={{
                backgroundColor: `${color}`,
                width: "20px",
                height: "20px",
                margin: "auto",
                borderRadius: `${shape}`,
              }}
            />
          </button>
          <button
            data-size="25"
            className="twenty-five"
            onClick={handleSizeChange}
          >
            <div
              data-size="25"
              style={{
                backgroundColor: `${color}`,
                width: "25px",
                height: "25px",
                margin: "auto",
                borderRadius: `${shape}`,
              }}
            />
          </button>
          <button data-size="30" className="thirty" onClick={handleSizeChange}>
            <div
              data-size="30"
              style={{
                backgroundColor: `${color}`,
                width: "30px",
                height: "30px",
                margin: "auto",
                borderRadius: `${shape}`,
              }}
            />
          </button>
        </div>
      </div>
      <div className="shape-picker"></div>

      <button className="reset" onClick={resetDrawing}>
        RESET
      </button>
    </div>
  );
};

export default Toolbar;
