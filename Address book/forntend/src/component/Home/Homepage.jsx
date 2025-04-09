import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
function Homepage(){
    return(
        <div>
             <Container className="text-center my-5">
                            <Row className="mb-4">
                                <Col>
                                    <h1>Home Page</h1>
                                </Col>
                            </Row>
            
                            <Row className="mb-4 justify-content-center">
                                <Col md={10}>
                                    <Image src="/image/c1.jpg" alt="Hero 1" fluid rounded />
                                </Col>
                            </Row>
            
                            <Row className="justify-content-center">
                                <Col md={10}>
                                    <Image src="/image/c2.jpg" alt="Hero 2" fluid rounded />
                                </Col>
                            </Row>
                        </Container>
        </div>
    )
}
export default Homepage