import React from 'react';
import Slider from './Slider';
import { Col } from 'shards-react';
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";

function Blog() {

    return (
        <Container fluid className="about-section">
            <Particle />
            <Container>
                <React.Fragment>
                    <Col xs="12" sm="4" className="text-sm-left text-center text-md-left mb-sm-0">
                        <h3 className="page-title">Posts</h3>
                    </Col>
                    <Slider />
                </React.Fragment>
            </Container>
        </Container>
    );
}

export default Blog;