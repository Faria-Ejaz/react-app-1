/**
 * /* eslint-disable jsx-a11y/anchor-is-valid
 *
 * @format
 */

import React from "react";
import "./VideoMeta.scss";
import VideoLinks from "../VideoLinks/VideoLinks";

export default function VideoMeta({videoDetails}) {

  return (
    <div className="video-meta">
      <div className="video-title">
        <h3>{videoDetails.title}</h3>
        <ul>
          <li>
            <span className="icon">
              <img src="/images/icon-1.svg" alt=""></img>
            </span>
            <span className="text">
              <strong>{videoDetails.views}</strong>
              <span className="d-none d-md-inline-block">views</span>
              <span className="d-block d-md-none">said watched</span>
            </span>
          </li>
          <li className="d-none d-md-block">
            <span className="icon">
              <img src="/images/icon-2.svg" alt=""></img>
            </span>
            <span className="text">
              <strong>{videoDetails.recommend}</strong> recommend
            </span>
          </li>
          <li className="d-flex d-md-none">
            <span className="icon">
              <img src="/images/icon-5.svg" alt=""></img>
            </span>
            <span className="text">
              <strong>{videoDetails.share}</strong> Share
            </span>
          </li>
          <li>
            <span className="icon">
              <img src="/images/icon-3.svg" alt=""></img>
            </span>
            <span className="text">
              <strong>{videoDetails.watchlist}</strong> in watchlist
            </span>
          </li>
        </ul>
      </div>
      <VideoLinks/>

    </div>
  );
}
