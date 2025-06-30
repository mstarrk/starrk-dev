import { useState, useEffect } from "preact/hooks";

type NowPlayingData = {
  isPlaying: boolean;
  title: string;
  artist: string;
  album: string;
  albumImageUrl: string;
  songUrl: string;
};

export default function SpotifyNowPlaying() {
  const [data, setData] = useState<NowPlayingData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNowPlaying() {
      try {
        const response = await fetch("/api/spotify/now-playing");
        const result = await response.json();
        console.log("Now Playing API result:", result);

        setData(result);
      } catch (error) {
        console.error("Error fetching Now Playing data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchNowPlaying();
  }, []);

  if (loading) {
    return <div style={{ visibility: "hidden" }} />;
  }

  if (!data) return null;

  if (!data.isPlaying) {
    return (
      <p class="text-sm text-gray-500 dark:text-gray-400">
        Not currently playing anything.
      </p>
    );
  }

  return (
    <div class="p-3 border border-gray-700/50 rounded-md bg-gray-900/20 w-fit">
      <p class="text-xs uppercase tracking-wide text-green-500 font-semibold mb-1">
        I'm Listening to
      </p>
      <a
        href={data.songUrl}
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center space-x-3 no-underline hover:opacity-80 transition-opacity"
      >
        <img
          src={data.albumImageUrl}
          alt={`Album art for ${data.album}`}
          width={64}
          height={64}
          class="rounded shadow"
        />
        <div>
          <p class="font-semibold leading-tight">{data.title}</p>
          <p class="text-sm text-gray-500">{data.artist}</p>
        </div>
      </a>
    </div>
  );
}
