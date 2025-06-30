import { useState, useEffect } from "preact/hooks";

type Artist = {
  name: string;
  url: string;
  image: string;
};

export default function SpotifyTopArtists() {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTopArtists() {
      try {
        const response = await fetch("/api/spotify/top-artists");
        const data = await response.json();
        setArtists(data.artists);
      } catch (error) {
        console.error("Error fetching Top Artists data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchTopArtists();
  }, []);

  if (loading) {
    return <p>Loading top artists...</p>;
  }

  return (
    <div>
      <h2>Top Artists This Month</h2>
      <ul>
        {artists.map((artist) => (
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
