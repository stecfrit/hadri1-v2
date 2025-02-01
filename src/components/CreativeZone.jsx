import React from "react";
import { useEffect, useState } from "react";
import { getNowPlayingItem, getTopTracksItem } from "../api/SpotifyAPI";

export default function CreativeZone(props) {
  const [loadingCurrent, setLoadingCurrent] = useState(true);
  const [loadingTop, setLoadingTop] = useState(true);
  const [nowPlaying, setNowPlaying] = useState({});
  const [topTracks, setTopTracks] = useState({});

  useEffect(() => {
    Promise.all([
      getNowPlayingItem(
        props.client_id,
        props.client_secret,
        props.refresh_token
      ),
    ]).then((results) => {
      setNowPlaying(results[0]);
      setLoadingCurrent(false);
    });

    Promise.all([
      getTopTracksItem(
        props.client_id,
        props.client_secret,
        props.refresh_token
      ),
    ]).then((results) => {
      if (results[0]) {
        setTopTracks(results[0]);
        setTimeout(() => {
          setLoadingTop(false);
        }, 2000);
      }
    });
  }, []);

  return (
    <div id="CreativeZone">
      <div className="background"></div>
      <h3 className="title">My spotify top tracks atm</h3>
      <h3 className="title">{import.meta.env.VITE_APP_HELLO}</h3>
      {loadingTop ? (
        <div className="top-tracks loading">
          {[...Array(3)].map((_, key) => (
            <div className="top-track loading" key={key}>
              <img className="top-track-image" />
              <div className="top-track-text">
                <div className="top-track-title"></div>
                <div className="top-track-artist"></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="top-tracks">
          {topTracks.map((track, key) => {
            return (
              <a
                href={track.songUrl}
                target="_blank"
                className="top-track"
                key={key}
              >
                <div className="background"></div>
                <img
                  src={track.albumImageUrl}
                  alt="album image"
                  className="top-track-image"
                />
                <div className="top-track-text">
                  <div className="top-track-title" title={track.title}>
                    {track.title}
                  </div>
                  <div className="top-track-artist" title={track.artist}>
                    {track.artist}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      )}

      {/* {loadingCurrent ? (
        <h2>[ loading now playing ... ]</h2>
      ) : (
        <h2>
          [ {nowPlaying.title} by {nowPlaying.artist} ]
        </h2>
      )} */}
    </div>
  );
}
