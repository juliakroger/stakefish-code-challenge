import { useState, useEffect } from "react";
import axios from "axios";

// const FAVORITES_KEY = "stakefish-code-challenge-list-favorites";
axios.defaults.baseURL = "https://api.coingecko.com/api/v3";

export const getListOfExchanges = () => {
  return useFetch("/exchanges?per_page=400");
};

export const getExchangeInfo = (id?: string) => {
  return useFetch(`/exchanges/${id}`);
};

export const getCoinPrice = (id?: string) => {
  return useFetch(`/simple/price?ids=${id}&vs_currencies=usd`);
};

const config = {
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
