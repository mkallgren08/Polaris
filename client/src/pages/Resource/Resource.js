import React from "react";
import Col from "../../components/Grid/Col";
import Row from "../../components/Grid/Row";
import Container from "../../components/Grid/Container";
import "./Resource.css";


const Resource = () =>
    <div>
        <Container fluid>
            <Row>
                <Col size="md-1" />
                <Col size="md-4">
                    <h1 className="pageHeader">Resources</h1>
                </Col>
                <Col size="md-7" />
            </Row>
            <Row>
                <Col size="md-4">
                    <div className="wrapper">
                        <a className="whiteText" href="/drone">
                            <img className="resourceImg" src="./images/drone.jpg" alt="drone" />
                            <br />
<<<<<<< HEAD
                            Drones
=======
                            <h3>Drones</h3>
>>>>>>> d9d33187c5b9b9eb440a6b53d2d65e3f97a0e9ba
                         </a>
                    </div>
                </Col>
                <Col size="md-4">
                    <div className="wrapper">
                        <a className="whiteText" href="/firstaid">
                            <img className="resourceImg" src="./images/firstAid.png" alt="First Aid" />
                            <br />
<<<<<<< HEAD
                            First Aid
=======
                            <h3>First Aid</h3>
>>>>>>> d9d33187c5b9b9eb440a6b53d2d65e3f97a0e9ba
                        </a>
                    </div>
                </Col>
                <Col size="md-4">
                    <div className="wrapper">
                        <a className="whiteText" href="/rafts">
                            <img className="resourceImg" src="./images/boats.jpg" alt="Rafts" />
                            <br />
<<<<<<< HEAD
                            Rafts
=======
                            <h3>Rafts</h3>
>>>>>>> d9d33187c5b9b9eb440a6b53d2d65e3f97a0e9ba
                        </a>
                    </div>
                </Col>

            </Row>
            <Row>
                <Col size="md-4">
                    <div className="wrapper">
                        <a className="whiteText" href="/foodAndWater">
                            <img className="resourceImg" src="./images/foodAndWater.svg" alt="Food/Water" />
                            <br />
<<<<<<< HEAD
                            Food/Water
=======
                            <h3>Food/Water</h3>
>>>>>>> d9d33187c5b9b9eb440a6b53d2d65e3f97a0e9ba
                        </a>
                    </div>
                </Col>
                <Col size="md-4">
                    <div className="wrapper">
                        <a className="whiteText" href="/generator">
                            <img className="resourceImg" src="./images/generator.jpg" alt="Generator" />
                            <br />
<<<<<<< HEAD
                            Generator
=======
                            <h3>Generator</h3>
>>>>>>> d9d33187c5b9b9eb440a6b53d2d65e3f97a0e9ba
                        </a>
                    </div>
                </Col>
                <Col size="md-4">
                    <div className="wrapper">
                        <a className="whiteText" href="/generalResource">
                            <img className="resourceImg" src="./images/general.ico" alt="General" />
                            <br />
<<<<<<< HEAD
                            Miscellaneous
=======
                            <h3>Miscellaneous</h3>
>>>>>>> d9d33187c5b9b9eb440a6b53d2d65e3f97a0e9ba
                        </a>
                    </div>
                </Col>
            </Row>
            <br /> <br />
        </Container>
    </div>

export default Resource;