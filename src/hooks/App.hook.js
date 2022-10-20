import { useState, useEffect } from "react";

export const useApp = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        setData(data.articles);
        setError(null);
      })
      .catch((err) => {
        console.log(err.messages);
        setData([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { data, loading, error };
};
