import useSWR from "swr";
import axios from "axios";

export const FetchApi = (param: string) => {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  const { data, error, isLoading } = useSWR(
    `http://localhost:8000/api/items?q=${param}`,
    fetcher
  );

  return { data, error, isLoading };
};
