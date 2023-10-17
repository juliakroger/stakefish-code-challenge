import { useState, useEffect } from "react";
import axios, { AxiosRequestConfig } from "axios";

axios.defaults.baseURL = "https://api.coingecko.com/api/v3";

export const getListOfExchanges = () => {
  return useFetch("/exchanges?per_page=400");
};

const config: AxiosRequestConfig = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
  },
};

export const useFetch = (endpoint: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>();
  const [data, setData] = useState<any>(null);

  const fetch = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(endpoint, config);
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetch();
  }, [endpoint]);

  return {
    data,
    isLoading,
    error,
    refetch: fetch,
  };
};
