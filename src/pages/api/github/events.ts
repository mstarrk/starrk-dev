import type { APIRoute } from "astro";
import { getGithubEvents } from "../../../lib/github";

export const GET: APIRoute = async () => {
  try {
    const events = await getGithubEvents();
    return new Response(JSON.stringify(events), {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        "content-type": "application/json",
      },
    });
  }
};
