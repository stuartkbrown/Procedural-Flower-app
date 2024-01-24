import Leftbar from "./components/Leftbar";
import Navbar from "./components/Navbar";
import WebGLCanvas from "./components/WebGLCanvas";

function App() {
  return (
    <div>
      <WebGLCanvas />
      <Navbar />
      <Leftbar />
    </div>
  );
}

export default App;
