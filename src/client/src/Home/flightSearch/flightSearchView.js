import React from 'react';
import { Col, Row, Label, ButtonGroup, Button, Input, Container } from 'reactstrap';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import DatePicker from 'react-datepicker';

import {departureList, arrivalList, airPortCodeMap} from '../../data';
import 'react-datepicker/dist/react-datepicker.css';
import {getClassName} from '../../utils';
import PropTypes from 'prop-types';

export default class FlightSearchView extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            journeyType: 'single',
            flightClass: 'economy'
        };
        this.handleChange = this.handleChange.bind(this);
        this.searchFlight = this.searchFlight.bind(this);
    }

    handleChange (name, data) {
        let key, value;
        if (event.type === 'mousedown' || (event.type === 'click' && data)) {
            key = name;
            value = data.value || data;
        } else {
            key = event.target.name;
            value = event.target.value;
        }

        if (this.getPassengerCount(key, value)) {
            this.setState({
                [key]: value
            });
        }
    }

    searchFlight () {
        const {fetchFlights} = this.props;
        sessionStorage.clear();
        for (let val in this.state) {
            sessionStorage.setItem(val, this.state[val]);
        }
        fetchFlights(this.state);
    }

    getPassengerCount (key, value) {
        const {adult, children, infant} = this.state;
        let count = parseInt(adult);
        if (children) { count += parseInt(children); }
        if (infant) { count += parseInt(infant); }

        if (count === 6 && value > this.state[key]) {
            return false;
        }
        return true;
    }

    disableDatePicker = () => {
        let flag = true;
        if (this.state.journeyType === 'return') {
            flag = false;
        }
        return flag;
    };

    getSearchButtonStatus = () => {
        let bool = true;
        const { departureAirportCode, arrivalAirportCode, departureDate, adult, journeyType, returnDate } = this.state;
        if (journeyType === 'single') {
            if (departureAirportCode && arrivalAirportCode && departureDate && adult) {
                bool = false;
                return bool;
            }
        } else if (journeyType === 'return') {
            if (departureAirportCode && arrivalAirportCode && departureDate && returnDate && adult) {
                bool = false;
                return bool;
            }
        } else {
            bool = true;
        }
        return bool;
    };

    render () {
        const {departureDate, returnDate, adult, children, infant, departureAirportCode, arrivalAirportCode} = this.state;
        return (
            <Container>
                {/* <Alert color="danger">
                    Maximum 6 passengers allowed at a time.
                </Alert> */}
                <Row className={'mar-top-20 mar-bottom-20'}>
                    <Col md={6}>
                        <ButtonGroup>
                            <Button outline color="primary"
                                className={getClassName(this.state, 'journeyType', 'single')}
                                onClick={this.handleChange}
                                value={'single'}
                                name="journeyType">
                                One Way
                            </Button>
                            <Button outline color="primary"
                                className={getClassName(this.state, 'journeyType', 'return')}
                                onClick={this.handleChange}
                                value={'return'}
                                name="journeyType">
                                Round Trip
                            </Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Label for="boarding">Boarding</Label>
                        <Dropdown options={departureList}
                            onChange={(e) => this.handleChange('departureAirportCode', e)}
                            value={airPortCodeMap[departureAirportCode]}
                            placeholder="Select an option" />
                    </Col>
                    <Col md={6}>
                        <Label for="destination">Destination</Label>
                        <Dropdown options={arrivalList}
                            onChange={(e) => this.handleChange('arrivalAirportCode', e)}
                            value={airPortCodeMap[arrivalAirportCode]}
                            placeholder="Select an option" />
                    </Col>
                </Row>
                <Row className={'marginInfo'}>
                    <Col md={6}>
                        <Label for="departureDate">Departure</Label>
                        <div>
                            <DatePicker
                                selected={departureDate}
                                minDate={new Date()}
                                onChange={(e) => this.handleChange('departureDate', e)}
                            />
                        </div>
                    </Col>
                    <Col md={6}>
                        <Label for="returnDate">Return</Label>
                        <div>
                            <DatePicker
                                selected={returnDate}
                                disabled={this.disableDatePicker()}
                                onChange={(e) => this.handleChange('returnDate', e)}
                            />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Label for="adult">Adult</Label>
                        <Input type="number" onChange={this.handleChange}
                            name="adult" value={adult} min="1" max="6"
                            id="adult" />
                    </Col>
                    <Col md={4}>
                        <Label for="children">Children</Label>
                        <Input type="number" onChange={this.handleChange}
                            name="children" value={children} min="0"
                            id="children" />
                    </Col>
                    <Col md={2}>
                        <Label for="infant">Infant</Label>
                        <Input type="number" onChange={this.handleChange}
                            name="infant" value={infant || 0}
                            min="0" id="infant" />
                    </Col>
                </Row>
                <Row className={'mar-top-20 mar-bottom-20'}>
                    <Col md={6}>
                        <ButtonGroup>
                            <Button outline color="primary"
                                className={getClassName(this.state, 'flightClass', 'economy')}
                                onClick={this.handleChange}
                                value={'economy'}
                                name="flightClass">
                                Economy
                            </Button>
                            <Button outline color="primary"
                                className={getClassName(this.state, 'flightClass', 'business')}
                                onClick={this.handleChange}
                                value={'business'}
                                name="flightClass">
                                Business
                            </Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                <Row >
                    <Col md={6}>
                        <Button color="success" onClick={this.searchFlight} disabled={this.getSearchButtonStatus()}>Search</Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

FlightSearchView.propTypes = {
    fetchFlights: PropTypes.function
};
