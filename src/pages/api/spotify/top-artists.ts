import type { APIRoute } from "astro";
import { getTopArtists } from "../../../lib/spotify";

type SpotifyArtist = {
  name: string;
  external_urls: { spotify: string };
  images: { url: string }[];
};

export const GET: APIRoute = async ({ params, request }) => {
  const response = await getTopArtists();
  const { items } = (await response.json()) as { items: SpotifyArtist[] };

  const artists = items.slice(0, 5).map((artist) => ({
    name: artist.name,
    url: artist.external_urls.spotify,
    image: artist.images[0]?.url ?? "",
  }));

  return new Response(JSON.stringify({ artists }), {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
};
