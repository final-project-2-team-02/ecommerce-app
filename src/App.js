import "./App.css";
import Title from "./components/Title.js";
import Navbar from "./components/Navbar.js";
import Content from "./components/Content.js";

function App() {
  return (
    <div className="App">
      <Title />
      <Navbar />
      <Content />
    </div>
  );
}

export default App;
