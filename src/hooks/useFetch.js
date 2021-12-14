import { useEffect, useState } from "react";
// let url = "https://v2.jokeapi.dev/joke/Any";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((response) => {
        // console.log(response);
        setData(response);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      });
  }, [url]);

  const refetch = () => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((response) => {
        // console.log(response);
        setData(response);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      });
  };

  return { data, loading, error, refetch };
}

export default useFetch;
