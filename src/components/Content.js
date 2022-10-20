import { Route, Routes } from "react-router-dom";
import Indonesia from "../pages/Indonesia";
import Programming from "../pages/Programming.js";
import Covid19 from "../pages/Covid-19.js";
import Saved from "../pages/Saved.js";
import { useApp } from "../hooks/App.hook.js";

const Content = () => {
  const { data, loading, error } = useApp();
  return (
    <Routes>
      <Route path="/" element={<Indonesia data={data} />} />
      {/* <Route path="/programming" element={<Programming />} />
      <Route path="/covid-19" element={<Covid19 />} />
      <Route path="/saved" element={<Saved />} /> */}
    </Routes>
  );
};

export default Content;
