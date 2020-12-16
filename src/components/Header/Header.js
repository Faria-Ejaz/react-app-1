/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {Container } from 'react-bootstrap';
import logo from '../../logo.svg';
import "./Header.scss";

export default function HeaderComponent() {

  return (
    <div>
       <div className="header-area">
            <Container>
                <div className="row align-item-center">
                    <nav className="navbar w-100">
                        <a className="navbar-brand" href="#"><img src={logo} alt=""></img></a>
                        <div className="header-right">
                            <div className="collapse navbar-collapse justify-content-end" id="navbar">
                                <ul className="nav navbar-nav">
                                    <li className="nav-item"><a className="nav-link" href="#">About us</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Login</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Sign up</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Contact us</a></li>
                                </ul>
                            </div>   
                            <a href="#" className="btn btn-yellow">Learn to use</a>
                            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                    </nav>
                </div>
            </Container>
        </div>
    </div>
  );
}