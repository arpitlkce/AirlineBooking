import React from 'react';
import { Button, Label, Input, Row, Col, Container } from 'reactstrap';
import FlightInfo from '../../Home/booking/flightInfo';
import PassengerInfoView from './passengerInfo';
import PropTypes from 'prop-types';

export default class StatusView extends React.Component {
    handleChange = (name, data) => {
        let key, value;
        if (event.type === 'mousedown' || event.type === 'click') {
            key = name;
            value = data.value || data;
        } else {
            key = event.target.name;
            value = event.target.value;
        }
        this.setState({
            [key]: value
        });
    };

    deleteBooking = () => {
        const {deleteBooking} = this.props;
        deleteBooking(this.state.bookingId);
    };

    fetchFlight = () => {
        const {fetchBookingDetail} = this.props;
        const {bookingId} = this.state;
        fetchBookingDetail(bookingId);
    };

    getBookingDetailsView = (flightInfoData) => {
        if (flightInfoData.flightInfo.length === 2) {
            return <div>
                <FlightInfo item={flightInfoData.flightInfo[0]} />
                <FlightInfo item={flightInfoData.flightInfo[1]} />
            </div>;
        } else {
            return <FlightInfo item={flightInfoData.flightInfo[0]} />;
        }
    };

    getPassengerDetailsView = (bookingInfo) => <PassengerInfoView passengers={bookingInfo.passengerInfo} />;

    showBookingInfoDetails = () => {
        const {bookingInfo} = this.props;
        if (bookingInfo) {
            return <div>
                <div className={'col-md-12'}>
                    {this.getBookingDetailsView(bookingInfo)}
                    {this.getPassengerDetailsView(bookingInfo)}
                    <Row className={'mar-top-20 mar-bottom-20'}>
                        <Col>
                            <Button onClick={this.deleteBooking} className={'mar-top-30'}>Delete Booking</Button>
                        </Col>
                    </Row>
                </div>
            </div>;
        }
    };

    render () {
        return (
            <Container>
                <Row className={'mar-top-20 mar-bottom-20'}>
                    <Col>
                        <Label for="bookingId" className="mr-sm-2">Booking ID</Label>
                        <Input onChange={this.handleChange} type="text" name="bookingId" id="bookingId" />
                    </Col>
                    <Col>
                        <Button onClick={this.fetchFlight} className={'mar-top-30'}>Submit</Button>
                    </Col>
                </Row>
                {this.showBookingInfoDetails()}
            </Container>
        );
    }
}

StatusView.propTypes = {
    deleteBooking: PropTypes.function,
    fetchBookingDetail: PropTypes.function,
    bookingInfo: PropTypes.object
};
