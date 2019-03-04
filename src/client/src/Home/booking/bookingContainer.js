import { connect } from 'react-redux';
import BookingView from './bookingView';
import {bookFlight} from '../../crudBase';

let getPassengerInfo = () => {
    let {adult, children, infant} = sessionStorage;
    return {adult: adult, children: children, infant: infant};
};

let getFlightInfo = (data) => {
    let flightInfo = [];
    data.forEach(function (val, index) {
        let flight = {};
        let key = Object.keys(val)[0];
        let {flightNumber, flightName} = val.flightData || val[key].flightData;
        let {departureTime, departureAirport} = val.departData || val[key].departData;
        let {arrivalTime, arrivalAirport} = val.arrivalData || val[key].arrivalData;
        flight.duration = val.duration || val[key].duration;
        flight.price = val.price || val[key].price;
        flight.departureAirportCode = val.departureAirportCode || val[key].departureAirportCode;
        flight.arrivalAirportCode = val.arrivalAirportCode || val[key].arrivalAirportCode;
        flight.flightNumber = flightNumber;
        flight.flightName = flightName;
        flight.departureTime = departureTime;
        flight.departureAirport = departureAirport;
        flight.arrivalTime = arrivalTime;
        flight.arrivalAirport = arrivalAirport;
        flightInfo.push(flight);
    });
    return flightInfo;
};

const mapStateToProps = (state) => {
    return {
        passengerInfo: getPassengerInfo(),
        flightInfo: getFlightInfo(state.itemSearchFetchSucceeded)
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        bookFlight: (data) => {
            dispatch(bookFlight(data));
            ownProps.history.push('/home');
        }
    };
};

const BookingContainer = connect(mapStateToProps, mapDispatchToProps)(BookingView);

export default BookingContainer;
