import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const useNav = () => {
  const location = useLocation();
  const [str, setStr] = useState("");

  const handleStr = () => {
    let temp = location.pathname;
    if (temp === "/") {
      setStr("Indonesia");
    } else {
      setStr(temp.slice(1).charAt(0).toUpperCase() + temp.slice(2));
    }
  };

  useEffect(() => {
    handleStr();
  });

  return {str, handleStr};
};
