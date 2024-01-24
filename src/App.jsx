import Leftbar from "./components/Leftbar";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import WebGLCanvas from "./components/WebGLCanvas";

function App() {
  return (
    <div>
      <WebGLCanvas />
      <Navbar />
      <Leftbar />
      <Rightbar />
    </div>
  );
}

export default App;
