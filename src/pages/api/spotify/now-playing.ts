import type { APIRoute } from "astro";
import { getNowPlaying } from "../../../lib/spotify";

export const GET: APIRoute = async () => {
  const response = await getNowPlaying();

  if (response.status === 204 || response.status > 400) {
    return new Response(JSON.stringify({ isPlaying: false }), {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    });
  }

  const song = await response.json();

  const isPlaying = song.is_playing;
  const item = song.item;

  if (!item || song.currently_playing_type !== "track") {
    console.log("Skipping non-track content:", song.currently_playing_type);
    return new Response(JSON.stringify({ isPlaying: false }), {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    });
  }

  const title = item.name;
  const artist = item.artists.map((a: { name: string }) => a.name).join(", ");
  const album = item.album.name;
  const albumImageUrl = item.album.images[0].url;
  const songUrl = item.external_urls.spotify;

  return new Response(
    JSON.stringify({
      album,
      albumImageUrl,
      artist,
      isPlaying,
      songUrl,
      title,
    }),
    {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    }
  );
};
