import { connect } from 'react-redux';
import FlightSearchView from './flightSearchView';
import {fetchFlights} from '../../crudBase';

const mapStateToProps = (state) => {
    return {
        disabledButton: state.itemDisabled
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchFlights: (data) => {
            dispatch(fetchFlights(data, ownProps));
        }
    };
};

const FlightSearchContainer = connect(mapStateToProps, mapDispatchToProps)(FlightSearchView);

export default FlightSearchContainer;
