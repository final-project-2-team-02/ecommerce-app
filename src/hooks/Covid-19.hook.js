import { useState, useEffect } from "react";

export const useCovid19 = () => {
  const [dataCovid19, setDataCovid19] = useState([]);
  const [loadingCovid19, setLoadingCovid19] = useState(true);
  const [errorCovid19, setErrorCovid19] = useState(null);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=covid-19&apiKey=d1aa61fe9ea74853b0a07e24c6e66e27"
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(`This is an HTTP error: The status is ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setDataCovid19(data.articles);
        setErrorCovid19(null);
      })
      .catch((err) => {
        console.log(err.messages);
        setDataCovid19([]);
      })
      .finally(() => {
        setLoadingCovid19(false);
      });
  }, []);

  return { dataCovid19, loadingCovid19, errorCovid19 };
};
