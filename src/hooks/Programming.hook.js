import { useState, useEffect } from "react";

export const useProgramming = () => {
  const [dataProgamming, setDataProgramming] = useState([]);
  const [loadingProgamming, setLoadingProgamming] = useState(true);
  const [errorProgamming, setErrorProgamming] = useState(null);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=programming&apiKey=d1aa61fe9ea74853b0a07e24c6e66e27"
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(`This is an HTTP error: The status is ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setDataProgramming(data.articles);
        setErrorProgamming(null);
      })
      .catch((err) => {
        console.log(err.messages);
        setDataProgramming([]);
      })
      .finally(() => {
        setLoadingProgamming(false);
      });
  }, []);

  return { dataProgamming, loadingProgamming, errorProgamming };
};
