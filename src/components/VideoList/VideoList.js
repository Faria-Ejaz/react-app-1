/**
 * /* eslint-disable jsx-a11y/anchor-is-valid
 *
 * @format
 */

import React from "react";
import "./VideoList.scss";
import VideoMeta from "./VideoMeta/VideoMeta";

export default function VideoList() {
  const videolistDetail = [
    {
      thumbnail: "/images/video-thumbnail-1.jpg",
      title: "Stranger Things",
      views: "300K",
      recommend: "200K",
      share: "200K",
      watchlist: "100K",
    },
    {
      thumbnail: "/images/video-thumbnail-2.jpg",
      title: "Alice's Adventures",
      views: "250K",
      recommend: "100K",
      share: "200K",
      watchlist: "100K",
    },
  ];

  return (
    <div>
      <div className="video-list">
        {videolistDetail.map((video) => {
          return (
            <div className="single-video">
              <div className="video-thumbnail">
                <img
                  className="d-none d-md-block"
                  src={video.thumbnail}
                  alt=""
                ></img>
                <button className="play-video">
                  <img src="/images/play.svg" alt=""></img>
                </button>
              </div>
              <VideoMeta videoDetails={video} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
