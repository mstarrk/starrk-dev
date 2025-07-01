import { useState, useEffect } from "preact/hooks";

type SpotifyAPIEndpoint = "now-playing" | "top-artists";

interface SpotifyData<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

export function useSpotifyData<T>(endpoint: SpotifyAPIEndpoint): SpotifyData<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`/api/spotify/${endpoint}`);
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
