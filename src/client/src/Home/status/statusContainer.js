import { connect } from 'react-redux';
import StatusView from './statusView';
import {fetchBookingDetail, deleteBooking} from '../../crudBase';

const mapStateToProps = (state) => {
    return {
        bookingInfo: state.itemFetchSucceeded
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBookingDetail: (bookingID) => {
            dispatch(fetchBookingDetail(bookingID));
        },
        deleteBooking: (bookingId) => dispatch(deleteBooking(bookingId))
    };
};

const StatusContainer = connect(mapStateToProps, mapDispatchToProps)(StatusView);

export default StatusContainer;
