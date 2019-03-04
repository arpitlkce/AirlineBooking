import React from 'react';
import { Jumbotron, Row, Col, Container, Label } from 'reactstrap';
import PropTypes from 'prop-types';

const FlightInfo = (props) => (
    <Jumbotron fluid>
        <Container fluid>
            <Row className="lead">
                <Col>
                    <Label>Flight Details </Label>
                </Col>
                <Col>
                    <Label>Departure Details</Label>
                </Col>
                <Col>
                    <Label>Arrival Details</Label>
                </Col>
                <Col>
                    <Label>Duration</Label>
                </Col>
                <Col>
                    <Label>Price</Label>
                </Col>
            </Row>
            <Row className={'small lead'}>
                <Col>
                    <div>{props.item.flightName}</div>
                    <div>{props.item.flightNumber}</div>
                </Col>
                <Col>
                    <div>{props.item.departureTime}</div>
                    <div>{props.item.departureAirportCode}</div>
                    <div>{props.item.departureAirport}</div>
                </Col>
                <Col>
                    <div>{props.item.arrivalTime}</div>
                    <div>{props.item.arrivalAirportCode}</div>
                    <div>{props.item.arrivalAirport}</div>
                </Col>
                <Col>
                    <div>{props.item.duration} Hrs</div>
                </Col>
                <Col>
                    <div>$ {props.item.price}</div>
                </Col>
            </Row>
        </Container>
    </Jumbotron>
);

FlightInfo.propTypes = {
    item: PropTypes.object
};

export default FlightInfo;
