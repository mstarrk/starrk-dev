import { useGithubData } from "./useGithubData";

type GithubEvent = {
  id: string;
  type: string;
  actor: { login: string; avatar_url: string; display_login: string };
  repo: { name: string; url: string };
  payload: any;
  created_at: string;
};

export default function GithubActivityFeed() {
  const { data, loading, error } = useGithubData<GithubEvent[]>("events");

  if (loading) {
    return <p>Loading GitHub activity...</p>;
  }

  if (error || !data) {
    return <p>Could not fetch GitHub activity.</p>;
  }

  return (
    <ul>
      {data.map((event) => (
        <li
          key={event.id}
          class="mb-2 pb-2 border-b border-gray-700/50 last:border-b-0"
        >
          <p class="text-sm text-gray-400">
            {new Date(event.created_at).toLocaleString()}
          </p>
          <p>
            <a
              href={`https://github.com/${event.actor.login}`}
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue-400 hover:underline"
            >
              {event.actor.display_login}
            </a>{" "}
            {event.type === "PushEvent" && (
                <>
                  pushed to{" "}
                  <a
                    href={`https://github.com/${event.repo.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-blue-400 hover:underline"
                  >
                    {event.repo.name}
                  </a>
                  {event.payload.commits && event.payload.commits.length > 0 && (
                    <p class="text-sm text-gray-500 mt-1">
                      {event.payload.commits[0].message}
                    </p>
                  )}
                </>
              )}
            {event.type === "CreateEvent" &&
              event.payload.ref_type === "repository" && (
                <>
                  created repository{" "}
                  <a
                    href={`https://github.com/${event.repo.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-blue-400 hover:underline"
                  >
                    {event.repo.name}
                  </a>
                </>
              )}
            {event.type === "ForkEvent" && (
              <>
                forked{" "}
                <a
                  href={`https://github.com/${event.repo.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-blue-400 hover:underline"
                >
                  {event.repo.name}
                </a>
              </>
            )}
            {event.type === "WatchEvent" && (
              <>
                starred{" "}
                <a
                  href={`https://github.com/${event.repo.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-blue-400 hover:underline"
                >
                  {event.repo.name}
                </a>
              </>
            )}
          </p>
        </li>
      ))}
    </ul>
  );
}
