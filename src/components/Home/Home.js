import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/headshot.png";

import * as Constants from "../../Constants.js";
import {
  AiFillGithub,

} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">

        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading-name">
                <strong className="main-name"> {Constants.name_1}</strong>
              </h1>
              

              <div style={{ padding: 50, textAlign: "left" }}>
                <h4>
                  {Constants.description_1}<a href={Constants.ucalgary}>{Constants.description_2}</a>{Constants.description_3}
                </h4>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
             
              <img src={homeLogo} alt="home pic" className="img-fluid" />
            </Col>
          </Row>

          <Row>
          <Col md={12} className="home-about-social">
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href={Constants.github}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={Constants.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
