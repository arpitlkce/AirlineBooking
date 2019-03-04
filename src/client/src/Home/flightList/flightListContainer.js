import { connect } from 'react-redux';
import FlightListView from './flightListView';
import {fetchSearchedFlightDetail} from '../../crudBase';
import {disabledItem} from '../../redux/actions';

const mapStateToProps = (state) => {
    return {
        items: state.itemListingSucceeded,
        disabledButton: state.itemDisabled
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        reviewFlights: (data) => {
            let changeRoute = true;
            let searchedData = data;
            dispatch(fetchSearchedFlightDetail(searchedData, changeRoute, ownProps));
        },
        disableBooking: (bool) => {
            dispatch(disabledItem(bool));
        }
    };
};

const FlightListContainer = connect(mapStateToProps, mapDispatchToProps)(FlightListView);

export default FlightListContainer;
