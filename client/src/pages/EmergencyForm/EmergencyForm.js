import React, { Component } from "react";
import Col from "../../components/Grid/Col";
import Row from "../../components/Grid/Row";
import Container from "../../components/Grid/Container";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import Input from "../../components/Form/Input";
import InputModal from "../../components/Modal/inputModal";
<<<<<<< HEAD

//Configuring Emergency Form
=======
import "./EmergencyForm.css"
>>>>>>> d9d33187c5b9b9eb440a6b53d2d65e3f97a0e9ba

class EmergencyForm extends Component {
    state = {
        Form: [],
        name: "",
        address: "",
        geoposition: {},
        safe: false,
        needs: {
            category: "none",
            specific: "none"
        }
    }

<<<<<<< HEAD
    //Configuring form input
=======
>>>>>>> d9d33187c5b9b9eb440a6b53d2d65e3f97a0e9ba
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

<<<<<<< HEAD
    //Configuring Form Submission
    //TODO: add authentication to the form submission
=======
>>>>>>> d9d33187c5b9b9eb440a6b53d2d65e3f97a0e9ba
    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.name && this.state.address && this.state.geoposition && this.state.safe) {
            API.saveForm({
                name: this.state.name,
                address: this.state.address,
                geoposition: this.state.geoposition,
                safe: this.state.safe,
                needs: {
                    category: this.state.category,
                    specific: this.state.specific
                },
            }).then(res => this.loadUser())
                .catch(err => console.log(err));
        }
    }

<<<<<<< HEAD
    //render the form
=======
>>>>>>> d9d33187c5b9b9eb440a6b53d2d65e3f97a0e9ba
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-1" />
                    <Col size="md-4">
                        <h1 className="pageHeader">Emergency Status Form</h1>
                    </Col>
                    <Col size="md-7" />
                </Row>
                <br />
                <Row>
                    <Col size="md-6">
                        <div className="wrapper">
                            <h4 className="blackText">Full Name{/*{this.state.name}*/}</h4>
                            <h4 className="blackText">Location{/*{this.state.address}*/}</h4>
                            <InputModal>
<<<<<<< HEAD
                                <h2 className="blackText" style={{ textAlign: "center" }}>
=======
                                <h2 className="inputModal" style={{ textAlign: "center" }}>
>>>>>>> d9d33187c5b9b9eb440a6b53d2d65e3f97a0e9ba
                                    Update Your Location
                                </h2>
                                <form>
                                    <Input
                                        name="address"
                                        value={this.state.address}
                                        onChange={this.handleInputChange}
                                        placeholder="Address (required)"
                                    />
                                    <div style={{ textAlign: "right" }}>
                                        <button style={{ marginRight: "5px" }} onChange={this.handleInputChange} onClick={this.handleFormSubmit} className="blueBtn">Submit</button>
                                        <button className="blueBtn" onClick={this.closeModal}>Close</button>
                                    </div>
                                </form>
                            </InputModal>
                        </div>

                        <br /><br />

                        <div className="wrapper">
                            <Col size="md-2" />
                            <Col size="md-3">
                                <Jumbotron >
                                    <div>
<<<<<<< HEAD
                                        <h4 style={{ textAlign: "center", textDecoration: "underline", color: "white" }}>Let Your Family Know Your Safety Status:</h4>
=======
                                        <h4 className = "formSectionHeader" style={{ textAlign: "center", textDecoration: "underline", color: "white" }}>What is Your Safety Status?</h4>
>>>>>>> d9d33187c5b9b9eb440a6b53d2d65e3f97a0e9ba
                                        <div className="radio" style={{ textAlign: "left" }}>
                                            <label style={{ color: "white", fontSize: "20px" }}><input type="radio" name="optradio" value="safe" />Safe</label>
                                        </div>
                                        <div className="radio" style={{ textAlign: "left" }}>
                                            <label style={{ color: "white", fontSize: "20px" }}><input type="radio" name="optradio" value="notSafe" />Not Safe</label>
                                        </div>

<<<<<<< HEAD
                                        <h4 style={{ textAlign: "center", textDecoration: "underline", color: "white" }}>What Does Your Family Need: </h4>
=======
                                        <h4 style={{ textAlign: "center", textDecoration: "underline", color: "white" }}>What Do You Need? </h4>
>>>>>>> d9d33187c5b9b9eb440a6b53d2d65e3f97a0e9ba
                                        <div className="checkbox" style={{ textAlign: "left" }}>
                                            <label style={{ color: "white", fontSize: "20px" }}><input type="checkbox" value="evacuation" />Evacuation</label>
                                        </div>
                                        <div className="checkbox" style={{ textAlign: "left" }}>
                                            <label style={{ color: "white", fontSize: "20px" }}><input type="checkbox" value="medEmergency" />Medical Emergency</label>
                                        </div>
                                        <div className="checkbox" style={{ textAlign: "left" }}>
                                            <label style={{ color: "white", fontSize: "20px" }}><input type="checkbox" value="medical" />Medical</label>
                                        </div>
                                        <div className="checkbox" style={{ textAlign: "left" }}>
                                            <label style={{ color: "white", fontSize: "20px" }}><input type="checkbox" value="childCare" />Child Care</label>
                                        </div>
                                        <div className="checkbox" style={{ textAlign: "left" }}>
                                            <label style={{ color: "white", fontSize: "20px" }}><input type="checkbox" value="" />Misc.</label>
                                        </div>


                                    </div>
                                </Jumbotron>
                            </Col>
                            <Col size="md=1" />
                        </div>
                    </Col>
                    <Col size="md-6">
<<<<<<< HEAD
                        <h4 style={{ textAlign: "left", color: "black" }}>Please specify what you need:</h4>
=======
                        <h4 style={{ textAlign: "left", color: "white" }}>If you are not safe, please specify what you need for aid:</h4>
>>>>>>> d9d33187c5b9b9eb440a6b53d2d65e3f97a0e9ba
                        <textarea style={{ height: "405px", width: "650px" }} />
                        <button className="blueBtn btn btn-default btn-lg">Submit</button>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default EmergencyForm;