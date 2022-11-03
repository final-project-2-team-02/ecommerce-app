import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Content } from "./component/content";
import { Header } from "./component/header/header";
import { Detail } from "./pages/detail";
import './style/style.css'

function App() {

  return (
    <section className="view">
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </section>
  );
}

export default App;
