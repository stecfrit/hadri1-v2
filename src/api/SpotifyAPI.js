// return data now playing
export async function getNowPlayingItem() {
  const response = await fetch(
    "/.netlify/functions/fetch-spotify?type=now-playing"
  );
  if (response.status === 204 || response.status > 400) {
    return false;
  }
  const data = await response.json();

  if (!data || !data.item) {
    return false;
  }

  const song = {
    albumImageUrl: data.item.album.images[0].url,
    artist: data.item.artists.map((artist) => artist.name).join(", "),
    isPlaying: data.is_playing,
    songUrl: data.item.external_urls.spotify,
    title: data.item.name,
  };

  return song;
}

// return data top tracks
export async function getTopTracksItem() {
  const response = await fetch(
    "/.netlify/functions/fetch-spotify?type=top-tracks"
  );
  if (response.status === 204 || response.status > 400) {
    return false;
  }
  const data = await response.json();

  const limited_items = data.items.slice(0, 3);

  const tracks = limited_items.map((item) => {
    return {
      title: item.name,
      artist: item.artists.map((_artist) => _artist.name).join(", "),
      songUrl: item.external_urls.spotify,
      albumImageUrl: item.album.images[0].url,
    };
  });

  return tracks;
}
