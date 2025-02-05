// Docs on request and context https://docs.netlify.com/functions/build/#code-your-function-2
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;
const TOP_ARTISTS_ENDPOINT = `https://api.spotify.com/v1/me/top/artists`;

// const client_id = import.meta.env.VITE_APP_SPOTIFY_CLIENT_ID;
// const client_secret = import.meta.env.VITE_APP_SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.VITE_APP_SPOTIFY_REFRESH_TOKEN;
const weird_client_thing = process.env.VITE_APP_SPOTIFY_WEIRD_THING;

const getAccessToken = async () => {
  // const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
  const basic = weird_client_thing;
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    // body: queryString.stringify({
    //   grant_type: "refresh_token",
    //   refresh_token,
    // }),
    body: `grant_type=refresh_token&refresh_token=${refresh_token}`,
  });
  return await response.json();
};

export default async (request, context) => {
  try {
    const { access_token } = await getAccessToken();
    if (!access_token) {
      return new Response("No access token", {
        status: 500,
      });
    }
    const url = new URL(request.url);
    const type = url.searchParams.get("type");

    if (type === "now-playing") {
      const data = await fetch(NOW_PLAYING_ENDPOINT, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      const nowPlaying = await data.json();
      return new Response(JSON.stringify(nowPlaying));
    }

    if (type === "top-tracks") {
      const data = await fetch(TOP_TRACKS_ENDPOINT, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      const topTracks = await data.json();
      return new Response(JSON.stringify(topTracks));
    }

    if (type === "top-artists") {
      const data = await fetch(TOP_ARTISTS_ENDPOINT, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      const topArtists = await data.json();
      return new Response(JSON.stringify(topArtists));
    }
  } catch (error) {
    return new Response(error.toString(), {
      status: 500,
    });
  }
};
