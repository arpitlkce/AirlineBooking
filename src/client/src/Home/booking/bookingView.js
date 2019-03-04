import React from 'react';
import { Button, Container, Row, Col, Label } from 'reactstrap';
import AdultInfo from './adultInfo';
import FlightInfo from './flightInfo';
import ChildrenInfo from './childrenInfo';
import BannerComponent from '../../bannerComponent';
import PropTypes from 'prop-types';

export default class BookingView extends React.Component {
    constructor (props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.obj = {};
    }

    handleChange (category, name) {
        let key, value;
        key = event.target.name;
        value = event.target.value;
        if (this.obj[category]) {
            if (this.obj[category][name]) {
                this.obj[category][name][key] = value;
            } else {
                this.obj[category][name] = {[key]: value};
            }
        } else {
            this.obj[category] = {[name]: {[key]: value}};
        }
    }
    renderAdultContainer () {
        const {passengerInfo} = this.props;
        let adultInfoFields = [];
        if (passengerInfo.adult) {
            for (let i = 0; i < passengerInfo.adult; i++) {
                adultInfoFields.push(<div><Label>Adult {i + 1}:</Label><AdultInfo
                    getClassName={this.getClassName} index={i + 1}
                    handleChange={this.handleChange} /></div>);
            }
            return adultInfoFields;
        }
    }

    renderChildrenContainer () {
        const {passengerInfo} = this.props;
        let childrenInfoFields = [];
        if (passengerInfo.children) {
            for (let i = 0; i < passengerInfo.children; i++) {
                childrenInfoFields.push(<div><Label>Children {i + 1}:</Label><ChildrenInfo index={i + 1}
                    handleChange={this.handleChange} />
                </div>);
            }
            return childrenInfoFields;
        }
    }

    renderInfantContainer () {
        const {passengerInfo} = this.props;
        let infantInfoFields = [];
        if (passengerInfo.infant) {
            for (let i = 0; i < passengerInfo.infant; i++) {
                infantInfoFields.push(<div><Label>Infant {i + 1}:</Label><AdultInfo index={i + 1}
                    handleChange={this.handleChange} />
                </div>);
            }
            return infantInfoFields;
        }
    }

    bookFlight = () => {
        const {bookFlight, flightInfo} = this.props;
        bookFlight({passengerInfo: this.obj, flightInfo: flightInfo});
    };

    getFlightInfoView = (flightInfoData) => {
        if (flightInfoData.length === 2) {
            return <div>
                <FlightInfo item={flightInfoData[0]} />
                <FlightInfo item={flightInfoData[1]} />
            </div>;
        } else {
            return <FlightInfo item={flightInfoData[0]} />;
        }
    };

    render () {
        const {flightInfo} = this.props;
        return (
            <div>
                <BannerComponent />
                <Container>
                    {this.getFlightInfoView(flightInfo)}
                    <Row form>
                        <Col md={4}>
                            {this.renderAdultContainer()}
                        </Col>
                        <Col md={4}>
                            {this.renderChildrenContainer()}
                        </Col>
                        <Col md={4}>
                            {this.renderInfantContainer()}
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={6}>
                            <Button onClick={this.bookFlight}>Book</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

BookingView.propTypes = {
    bookFlight: PropTypes.function,
    flightInfo: PropTypes.Array,
    passengerInfo: PropTypes.object
};
