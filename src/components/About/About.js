import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Github from "./Github";
import Techstack from "./Techstack";

import homeLogo from "../../Assets/headshot.png";


function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
        <img src={homeLogo} alt="home pic" className="img-fluid" />
        </Row>
        <h1>About Me</h1>
        <p>I am a woman who loves working with others on amazing projects. I'm a singer in two choirs, cyclist and amateur axe thrower. Below you can find my proficient languages, and examples of their uses in my projects. </p>
        <p> To get in touch with me please email: </p> <a href="mailto:kaitlin.decf@gmail.com">kaitlin.decf@gmail.com</a>
        <br /> 
        <h1 className="projet-heading">
          Languages
        </h1>

        <Techstack />

      <Github />
      </Container>
    </Container>
  );
}

export default About;
