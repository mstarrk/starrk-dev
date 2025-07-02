import { useState, useEffect } from "preact/hooks";

type GithubAPIEndpoint = "events";

interface GithubData<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

export function useGithubData<T>(endpoint: GithubAPIEndpoint): GithubData<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`/api/github/${endpoint}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (e: any) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, loading, error };
}
