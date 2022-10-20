import { useState, useEffect } from "react";

export const useIndonesia = () => {
  const [dataIndonesia, setDataIndonesia] = useState([]);
  const [loadingIndonesia, setLoadingIndonesia] = useState(true);
  const [errorIndonesia, setErrorIndonesia] = useState(null);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=id&apiKey=d1aa61fe9ea74853b0a07e24c6e66e27"
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(`This is an HTTP error: The status is ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setDataIndonesia(data.articles);
        setErrorIndonesia(null);
      })
      .catch((err) => {
        console.log(err.messages);
        setDataIndonesia([]);
      })
      .finally(() => {
        setLoadingIndonesia(false);
      });
  }, []);

  return { dataIndonesia, loadingIndonesia, errorIndonesia };
};
