/**
 * /* eslint-disable jsx-a11y/anchor-is-valid
 *
 * @format
 */

import React, { useEffect, useState } from "react";
import { camelCase } from 'lodash';

import "./VideoList.scss";
import VideoMeta from "./VideoMeta/VideoMeta";

export default function VideoList() {
  const [videolistDetail, setvideolistDetail] = useState([]);

  useEffect(() => {
    fetch("http://ec2-18-212-205-22.compute-1.amazonaws.com/asset/")
      .then(res => res.json())
      .then(
        (result) => {
          setvideolistDetail(result)
          console.log(result)
        },
        (error) => {
          console.log(error)
        }
      )
  }, [])


  const camelizeKeys = (obj) => {
    if (Array.isArray(obj)) {
      return obj.map(v => camelizeKeys(v));
    } else if (obj !== null && obj.constructor === Object) {
      return Object.keys(obj).reduce(
        (result, key) => ({
          ...result,
          [camelCase(key)]: camelizeKeys(obj[key]),
        }),
        {},
      );
    }
    return obj;
  };

  return (
    <div>
      <div className="video-list">
        {videolistDetail.length ? videolistDetail.map((vid) => {
          let validJsonString = vid.data.replace(/"/g, ' ').replace(/\'/g, "\"")
          let parseThumbnail = JSON.parse(validJsonString);
          const video = camelizeKeys(vid)
          return (
            <div className="single-video">
              <div className="video-thumbnail">
                <img className="d-none d-md-block" src={parseThumbnail.images.desktop} alt=""></img>
                <img class="d-block d-md-none" src={parseThumbnail.images.mobile} alt=""></img>
                <button className="play-video">
                  <img src="/images/play.svg" alt=""></img>
                </button>
              </div>
              <VideoMeta key={video.assetId} videoDetails={video} />
            </div>
          );
        }) : <div>Loading...</div>}
      </div>
    </div>
  );
}
