const GITHUB_PAT = import.meta.env.GITHUB_PAT;
const GITHUB_USERNAME = "mstarrk";

const GITHUB_EVENTS_ENDPOINT = `https://api.github.com/users/${GITHUB_USERNAME}/events/public?per_page=5`;

export const getGithubEvents = async () => {
  const response = await fetch(GITHUB_EVENTS_ENDPOINT, {
    headers: {
      Authorization: `token ${GITHUB_PAT}`,
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  if (!response.ok) {
    throw new Error(`GitHub API error! status: ${response.status}`);
  }

  return response.json();
};
