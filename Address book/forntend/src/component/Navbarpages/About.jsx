import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

function About() {
    return (
        <Container className="my-5">
            <Row className="text-center mb-4">
                <Col>
                    <h1>About Us</h1>
                    <p className="text-muted">Learn more about our Contact Manager App</p>
                </Col>
            </Row>

            <Row className="align-items-center">
                <Col md={6} className="mb-4 mb-md-0">
                    <Image
                        src="/image/about.png"
                        alt="About"
                        fluid
                        rounded
                    />
                </Col>

                <Col md={6}>
                    <h4>Why this app?</h4>
                    <p>
                        Our Contact Manager app helps you easily create, edit, view, and delete your contacts in one place.
                        It's designed with a user-friendly interface and fast performance in mind. Whether you're managing personal contacts or business clients,
                        this app ensures your data is safe, organized, and always accessible.
                    </p>
                    <p>
                        With features like validation, responsive layout, and a smooth experience powered by React and Bootstrap, it’s the modern way to stay connected.
                    </p>
                </Col>
            </Row>
            
        </Container>
        
    );
}

export default About;
