import { useEffect, useState } from "react";
import { fetchData } from "../api/api";
import { IData } from "../types/data";

export const useFetchData = () => {
  const [data, setData] = useState<IData[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData();
        setData(result);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

    getData();
  }, []);

  return { data, loading, error };
};