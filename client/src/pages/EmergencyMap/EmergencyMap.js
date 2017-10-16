import React from 'react';
<<<<<<< HEAD
import Col from "../../components/Grid/Col";
import Row from "../../components/Grid/Row";
import Container from "../../components/Grid/Container";
import "./EmergencyMap.css";
import { Map, InfoWindow, Marker, GoogleApiWrapper, google } from 'google-maps-react';


//Creating the emergency map
=======
import API from "../../utils/API";
import Col from "../../components/Grid/Col";
import Row from "../../components/Grid/Row";
import Container from "../../components/Grid/Container";
import Input from "../../components/Form/Input";
import "./EmergencyMap.css";
import InputModal from "../../components/Modal/inputModal";
import { Map, InfoWindow, Marker, GoogleApiWrapper, google } from 'google-maps-react';

>>>>>>> d9d33187c5b9b9eb440a6b53d2d65e3f97a0e9ba
export class EmergencyMap extends React.Component {

    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        locations: [
            {
                position: {
                    lat: 37.77,
                    lng: -122.4
                },
                name: "Michael",
                safe: "safe",
                needs: {
<<<<<<< HEAD
                    category: "none",
                    specifics: "none"
=======
                    category: "None",
                    specifics: "Checked in as safe"
>>>>>>> d9d33187c5b9b9eb440a6b53d2d65e3f97a0e9ba
                }
            },
            {
                position: {
                    lat: 37.79,
                    lng: -122.389
                },
                name: "Renee",
                safe: "",
                needs: {
<<<<<<< HEAD
                    category: "medical",
                    specifics: "insulin"
=======
                    category: "Medical",
                    specifics: "Need insulin - fridge is broken, can't keep cool"
>>>>>>> d9d33187c5b9b9eb440a6b53d2d65e3f97a0e9ba
                }
            },
            {
                position: {
                    lat: 37.73,
                    lng: -122.42
                },
                name: "Brian",
                safe: "",
                needs: {
<<<<<<< HEAD
                    category: "medical assistance",
=======
                    category: "Medical Assistance",
>>>>>>> d9d33187c5b9b9eb440a6b53d2d65e3f97a0e9ba
                    specifics: "tree limb fell on family member"
                }
            },
            {
                position: {
                    lat: 37.77,
                    lng: -122.45
                },
<<<<<<< HEAD
                name: "David1",
                safe: "",
                needs: {
                    category: "food",
                    specifics: "only 1 day's supply left"
=======
                name: "David H.",
                safe: "",
                needs: {
                    category: "Food",
                    specifics: "Only 1 day's supply left"
>>>>>>> d9d33187c5b9b9eb440a6b53d2d65e3f97a0e9ba
                },
            },
            {
                position: {
                    lat: 37.77,
                    lng: -122.49
                },
                name: "David",
                safe: "",
                needs: {
<<<<<<< HEAD
                    category: "childcare",
                    specifics: "running out of baby formula"
=======
                    category: "Childcare",
                    specifics: "Running out of baby formula"
>>>>>>> d9d33187c5b9b9eb440a6b53d2d65e3f97a0e9ba
                }
            }
        ]
    }

<<<<<<< HEAD
    //Configuring the links to the Pips
    getPipColor = (needs) => {
        switch (needs) {
            case "none" || "unknown":
=======
    getPipColor = (needs) => {
        switch (needs) {
            case "None":
>>>>>>> d9d33187c5b9b9eb440a6b53d2d65e3f97a0e9ba
                console.log("Needs = None")
                return "https://maps.google.com/mapfiles/ms/icons/ltblue-dot.png"
                break;

<<<<<<< HEAD
            case "medical assistance":
                return "https://maps.google.com/mapfiles/ms/icons/red-dot.png"
                break;

            case "medical":
                return "https://maps.google.com/mapfiles/ms/icons/orange-dot.png"
                break;

            case "childcare":
                return "https://maps.google.com/mapfiles/ms/icons/yellow-dot.png"
                break;

            case "food":
=======
            case "Medical Assistance":
                return "https://maps.google.com/mapfiles/ms/icons/red-dot.png"
                break;

            case "Medical":
                return "https://maps.google.com/mapfiles/ms/icons/orange-dot.png"
                break;

            case "Childcare":
                return "https://maps.google.com/mapfiles/ms/icons/yellow-dot.png"
                break;

            case "Food":
>>>>>>> d9d33187c5b9b9eb440a6b53d2d65e3f97a0e9ba
                return "https://maps.google.com/mapfiles/ms/icons/green-dot.png"
                break;
        }
    }

    // componentDidMount () {
    //     API.getEmergencyData()
    //     .then(res => console.log(res))
    // Replace console.log with this.setState({
    //     locations: res.data.locations
    // })
    //}

    onMarkerClick = (props, marker, e) => {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    }

    render() {
        const markers = this.state.locations.map(
            location =>
                <Marker
                    onClick={this.onMarkerClick}
                    key={location.name}
                    name={location.name}
                    position={location.position}
                    safe={location.safe}
                    eCategory={location.needs.category}
                    eSpecifics={location.needs.specifics}
                    lat={location.position.lat}
                    lng={location.position.lng}
                    icon={{
                        url: this.getPipColor(location.needs.category)
                        //url: "https://maps.google.com/mapfiles/ms/icons/green-dot.png"

                    }}
                //icon = {getPipColor(location.needs.category)}
                />)
<<<<<<< HEAD
=======

        let mapStyle = {
            height: "500px",
            padding: '15px',
            marginBottom: '40px',
            border: "#666666 7px solid",
            borderRadius: "15px 30px"
        }



>>>>>>> d9d33187c5b9b9eb440a6b53d2d65e3f97a0e9ba
        return (
            <div>
                <Container fluid>
                    <Row>
                        <Col size="md-1" />
                        <Col size="md-4">
                            <h1 className="pageHeader">Emergency Map</h1>
                        </Col>
                        <Col size="md-7" />
                    </Row>
                    <br /> <br /> <br />
                    <Row>
                        <Col size="md-2" />
                        <Col size="md-8">
<<<<<<< HEAD
                            <div id="emergencyMap">
=======
>>>>>>> d9d33187c5b9b9eb440a6b53d2d65e3f97a0e9ba
                                <Map
                                    google={this.props.google}
                                    zoom={12}
                                    initialCenter={this.state.locations[0].position}
<<<<<<< HEAD
=======
                                    style = {mapStyle}
>>>>>>> d9d33187c5b9b9eb440a6b53d2d65e3f97a0e9ba
                                >

                                    {markers}

                                    <InfoWindow onClose={this.onInfoWindowClose} marker={this.state.activeMarker}
                                        visible={this.state.showingInfoWindow}>
                                        <div className="infoWindow">
<<<<<<< HEAD
                                            <h1>Name: {this.state.selectedPlace.name}</h1>
                                            <h2>Emergency Status: {this.state.selectedPlace.eCategory} - {this.state.selectedPlace.eSpecifics}</h2>
                                            <h3>Location(Lat/Lon): {this.state.selectedPlace.lat}&deg;, {this.state.selectedPlace.lng}&deg;</h3>
=======
                                            <h1 className="infoWindowText">Name: {this.state.selectedPlace.name}</h1>
                                            <h2 className="infoWindowText">Emergency Status: {this.state.selectedPlace.eCategory} </h2>
                                            <h3 className="infoWindowText">Comments: {this.state.selectedPlace.eSpecifics}</h3>
                                            <h4 className="infoWindowText">Location(Lat/Lon): {this.state.selectedPlace.lat}&deg;, {this.state.selectedPlace.lng}&deg;</h4>
>>>>>>> d9d33187c5b9b9eb440a6b53d2d65e3f97a0e9ba
                                        </div>
                                    </InfoWindow>

                                </Map>
<<<<<<< HEAD
                            </div>
=======
>>>>>>> d9d33187c5b9b9eb440a6b53d2d65e3f97a0e9ba
                        </Col>
                        <Col size="md-2" />
                    </Row>
                </Container>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyApz8tuOvqnvFFyonTrlaDeY4cu9oP54L0")
})(EmergencyMap)


