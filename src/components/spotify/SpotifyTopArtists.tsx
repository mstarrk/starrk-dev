import { useSpotifyData } from "./useSpotifyData";

type Artist = {
  name: string;
  url: string;
  image: string;
};

type TopArtistsData = {
  artists: Artist[];
};

export default function SpotifyTopArtists() {
  const { data, loading, error } =
    useSpotifyData<TopArtistsData>("top-artists");

  if (loading) {
    return <p>Loading top artists...</p>;
  }

  if (error || !data || !data.artists) {
    return <p>Could not fetch top artists.</p>;
  }

  return (
    <div>
      <h2>Top Artists This Month</h2>
      <ul>
        {data.artists.map((artist) => (
          <li key={artist.url}>
            <a href={artist.url} target="_blank" rel="noopener noreferrer">
              <img
                src={artist.image}
                alt={artist.name}
                width="64"
                height="64"
              />
              <p>{artist.name}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
