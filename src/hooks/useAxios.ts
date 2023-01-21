import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { useEffect, useState } from "react";

const useAxios = (axiosParams: AxiosRequestConfig) => {
  const [response, setResponse] = useState<AxiosResponse>();
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async (params: AxiosRequestConfig) => {
    try {
      const resp = await axios.request(params);
      setResponse(resp);
    } catch (err) {
      const error = err as AxiosError;
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      axiosParams.method?.toLowerCase() === "get" ||
      axiosParams.method === undefined
    ) {
      fetchData(axiosParams);
    }
  }, [axiosParams]);

  const sendData = () => {
    fetchData(axiosParams);
  };

  return { response, error, loading, sendData };
};

export default useAxios;
