import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";

const CanvasContext = createContext(null);

export const CanvasProvider = ({ children }) => {
  const [color, setColor] = useState("#000");
  const [lineShape, setLineShape] = useState("round");
  const [drawWidth, setDrawWidth] = useState(5);
  const [isDrawing, setIsDrawing] = useState(false);

  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2 - 600;
    canvas.height = window.innerHeight * 2 - 20;
    canvas.style.width = `${window.innerWidth - 300}px`;
    canvas.style.height = `${window.innerHeight - 10}px`;

    const context = canvas.getContext("2d");
    context.scale(2, 2);
    context.lineCap = lineShape;
    context.strokeStyle = color;
    context.lineWidth = drawWidth;
    contextRef.current = context;
  }, [color, drawWidth, lineShape]);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  return (
    <CanvasContext.Provider
      value={{
        color,
        setColor,
        lineShape,
        setLineShape,
        drawWidth,
        setDrawWidth,
        isDrawing,
        setIsDrawing,
        startDrawing,
        finishDrawing,
        draw,
        canvasRef,
      }}
    >
      {children}
    </CanvasContext.Provider>
  );
};

export const useCanvas = () => {
  const context = useContext(CanvasContext);
  if (!context) {
    throw new Error("useCanvas must be used within the CanvasProvider");
  }
  return context;
};
