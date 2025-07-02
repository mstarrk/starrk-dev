import { useSpotifyData } from "./useSpotifyData";

type NowPlayingData = {
  isPlaying: boolean;
  title: string;
  artist: string;
  album: string;
  albumImageUrl: string;
  songUrl: string;
};

export default function SpotifyNowPlaying() {
  const { data, loading, error } =
    useSpotifyData<NowPlayingData>("now-playing");

  if (loading) {
    return <div />;
  }

  if (error || !data || !data.isPlaying) {
    return null;
  }

  return (
    <div class="p-3 border border-gray-700/50 rounded-md bg-gray-900/20 w-fit">
      <p class="text-xs uppercase tracking-wide text-white font-semibold mb-1">
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
          <p class="font-semibold leading-tight text-white">{data.title}</p>
          <p class="text-sm text-white dark:text-gray-400">{data.artist}</p>
        </div>
      </a>
    </div>
  );
}
