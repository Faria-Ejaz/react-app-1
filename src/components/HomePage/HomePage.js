/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {Container} from 'react-bootstrap';
import "./HomePage.scss";
import VideoList from "../VideoList/VideoList";

export default function HomePage() {

  return (
    <div>
        <div className="video-list-area">
            <Container>
                <div className="row">
                    <div className="col-12">
                        <div className="video-filter">
                            <ul>
                                <li><a className="active" href="#"><img src="/images/netflix.svg" alt=""></img></a></li>
                                <li><a href="#"><img src="/images/prime_video.svg" alt=""></img></a></li>
                            </ul>
                        </div>
                        <VideoList/>
                    </div>
                </div>
            </Container>
        </div>
    </div>
  );
}