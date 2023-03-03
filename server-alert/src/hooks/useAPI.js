import { useState, useEffect } from "react";

const useAPI = (initialUrl, initialData = null) => {
  const [data, setData] = useState(initialData);
  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  const getData = () => {
    setUrl(initialUrl);
  };

  const postData = async (body) => {
    setIsLoading(true);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const json = await response.json();
      setData(json);
    } catch (error) {
      setError(error);
    }

    setIsLoading(false);
  };

  const putData = async (id, body) => {
    setIsLoading(true);

    try {
      const response = await fetch(`${url}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const json = await response.json();
      setData(json);
    } catch (error) {
      setError(error);
    }

    setIsLoading(false);
  };

  const deleteData = async (id) => {
    setIsLoading(true);

    try {
      const response = await fetch(`${url}/${id}`, {
        method: "DELETE",
      });

      const json = await response.json();
      setData(json);
    } catch (error) {
      setError(error);
    }

    setIsLoading(false);
  };

  return {
    data,
    isLoading,
    error,
    getData,
    postData,
    putData,
    deleteData,
  };
};

export default useAPI;
