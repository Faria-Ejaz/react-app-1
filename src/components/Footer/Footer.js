/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {Container, Row } from 'react-bootstrap';
import "./Footer.scss";
export default function FooterComponent() {

  return (
    <div>
        <div className="footer-area">
            <Container>
                <Row>
                <div className="col text-center">
                        (c) 2021 Grekkr Inc
                    </div>
                </Row>
            </Container>
        </div>
    </div>
  );
}