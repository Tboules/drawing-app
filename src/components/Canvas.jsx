import React from "react";
import { useCanvas } from "../context/CanvasContext";

const Canvas = () => {
  const { canvasRef, startDrawing, draw, finishDrawing } = useCanvas();

  return (
    <canvas
      style={{ marginLeft: "300px" }}
      ref={canvasRef}
      onMouseDown={startDrawing}
      onMouseMove={draw}
      onMouseUp={finishDrawing}
    />
  );
};

export default Canvas;
