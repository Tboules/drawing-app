import React from "react";
import { useCanvas } from "../context/CanvasContext";

const Canvas = () => {
  const { canvasRef, startDrawing, draw, finishDrawing } = useCanvas();

  return (
    <canvas
      ref={canvasRef}
      onMouseDown={startDrawing}
      onMouseMove={draw}
      onMouseUp={finishDrawing}
      style={{
        boxShadow: "inset 3px 0px 3px 0px rgba(0,0,0,0.6)",
        marginLeft: "300px",
      }}
    />
  );
};

export default Canvas;
