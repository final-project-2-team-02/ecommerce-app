import { Route, Routes } from "react-router-dom";
import Indonesia from "../pages/Indonesia";
import Programming from "../pages/Programming.js";
import Covid19 from "../pages/Covid-19.js";
import Saved from "../pages/Saved.js";
import { useIndonesia } from "../hooks/Indonesia.hook.js";
import { useProgramming } from "../hooks/Programming.hook";

const Content = () => {
  const { dataIndonesia, loadingIndonesia, errorIndonesia } = useIndonesia();
  const { dataProgamming, loadingProgamming, errorProgramming } = useProgramming();

  return (
    <Routes>
      <Route path="/" element={<Indonesia datas={dataIndonesia} />} />
      <Route path="/programming" element={<Programming datas={dataProgamming} />} />
      {/* <Route path="/covid-19" element={<Covid19 />} />
      <Route path="/saved" element={<Saved />} /> */}
    </Routes>
  );
};

export default Content;
