/**
 * /* eslint-disable jsx-a11y/anchor-is-valid
 *
 * @format
 */

import React from "react";
import "./VideoLinks.scss";

export default function VideoLinks() {

  return (
    <div className="video-links">
    <ul>
      <li>
        <button>
          <span>
            <img src="/images/icon-4.svg" alt=""></img>
          </span>
          Watched
        </button>
      </li>
      <li>
        <button>
          <span>
            <img src="/images/icon-5.svg" alt=""></img>
          </span>
          Share
        </button>
      </li>
      <li>
        <button>
          <span>
            <img src="/images/icon-6.svg" alt=""></img>
          </span>
          Watchlist
        </button>
      </li>
    </ul>
  </div>
  );
}
