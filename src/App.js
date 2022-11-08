import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Content } from "./component/content";
import { Tampil } from "./pages/coba";
import { Detail } from "./pages/detail";
import { Login } from "./pages/login";
import './style/style.css'

function App() {

  return (
    <section className="view">
      <Routes>
        <Route path="/" element={<Tampil />}>
          <Route index element={<Content />} />
          <Route path="/:id" element={<Detail />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </section>
  );
}

export default App;
