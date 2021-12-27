import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import proj_3 from "../../Assets/Projects/proj_3.png";
import proj_2 from "../../Assets/Projects/proj_2.png";
import proj_4 from "../../Assets/Projects/proj_4.png";
import proj_1 from "../../Assets/Projects/proj_1.png";
import proj_5 from "../../Assets/Projects/proj_5.jpg";

import * as Constants from "../../Constants.js";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Projects
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={proj_1}
              isBlog={false}
              title={Constants.proj_1_name}
              description={Constants.proj_1_description}
              link={Constants.github}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={proj_2}
              isBlog={false}
              title={Constants.proj_2_name}
              description={Constants.proj_2_description}
              link={Constants.proj_2_url_1}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={proj_3}
              isBlog={false}
              title={Constants.proj_3_name}
              description={Constants.proj_3_description}
              link={Constants.github}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={proj_4}
              isBlog={false}
              title={Constants.proj_4_name}
              description={Constants.proj_4_description}
              link={Constants.github}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={proj_5}
              isBlog={false}
              title={Constants.proj_5_name}
              description={Constants.proj_5_description}
              link={Constants.proj_5_url_1}
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
