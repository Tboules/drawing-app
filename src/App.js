import Canvas from "./components/Canvas";
import Toolbar from "./components/Toolbar";
import { CanvasProvider } from "./context/CanvasContext";

function App() {
  return (
    <CanvasProvider className="App">
      <Toolbar />
      <Canvas />
    </CanvasProvider>
  );
}

export default App;
