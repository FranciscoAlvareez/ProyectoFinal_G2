import React, { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = (_url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const params = {
    key: '5d94c35eb3cd4c74ae2842e8d93e0704',
  };

  useEffect(() => {
    setLoading(true);
    setData(null);
    setError(null);
    const source = axios.CancelToken.source();

    setTimeout(() => {
      axios
        .get(_url, { params, cancelToken: source.token })
        .then((res) => {
          setLoading(false);
          setData(res.data);
        })
        .catch((err) => {
          setLoading(false);
          setError("An error occurred...");
        });
    }, 1000);

    return () => {
      source.cancel();
    };
  }, [_url]);

  return { data, error, loading };
};
