import { Route, Routes } from "react-router-dom";
import { Navbar } from "./component/navbar";
import "./App.css";
import { Article } from "./pages/article";
import { Search } from "./pages/search";

function App() {
  const date = new Date()
  const day = date.getDate()
  const month = date.getMonth()
  const year = date.getFullYear()
  const tgl = `&from=${year}-${month}-${day}&to=${year}-${month - 1}-${day}`

  return (
    <div className="view">
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home nama={'q=programming'} />} />
        <Route path="/baru" element={<Home nama={'q=covid-19'} />} /> */}
        {/* <Route path="/" element={<View linkUrl={'everything?q=programming'} />} />
        <Route path="/baru" element={<View linkUrl={'everything?q=covid-19'} />} /> */}
        <Route path="/" element={<Article linkUrl={`top-headlines?country=id`} />} />
        <Route path="/pro" element={<Article linkUrl={`everything?q=programming${tgl}`} />} />
        <Route path="/covid" element={<Article linkUrl={`everything?q=covid-19${tgl}`} />} />
        <Route path="/eco" element={<Article linkUrl={`everything?q=economy${tgl}`} />} />
        <Route path="/search/:title" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
