import {itemListingSucceeded, itemFetchSucceeded, itemDeleteSuccess,
    itemSearchFetchSucceeded, isAuthSuccess, itemStatus} from './redux/actions';
import {SUCCESS_MESSAGE} from './constants';

export const login = (data) => (dispatch, getState) => fetch('api/login', {
    method: 'post',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
}).then(res => res.json())
    .then(res => {
        dispatch(isAuthSuccess(res.data));
    });

export const fetchFlights = (data, router) => (dispatch, getState) => fetch('api/fetchFlight', {
    method: 'post',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
}).then(res => res.json())
    .then(res => {
        dispatch(itemListingSucceeded(res.data));
        router.history.push('/flightList');
    });

export const fetchBookingDetail = (id) => (dispatch, getState) => fetch('api/fetchBooking/' + id, {
    method: 'get',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    }
}).then(res => res.json())
    .then(res => {
        if (typeof (res.data) === 'string') {
            dispatch(itemStatus(res.data));
        } else {
            dispatch(itemFetchSucceeded(res.data));
        }
    });

export const fetchSearchedFlightDetail = (data, changeRoute, router) => (dispatch, getState) => {
    dispatch(itemSearchFetchSucceeded(data));
    if (changeRoute) {
        router.history.push('/reviewFlight');
    }
};

export const bookFlight = (data) => (dispatch, getState) => fetch('api/bookFlight', {
    method: 'post',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
}).then(res => res.json())
    .then(res => {
        dispatch(itemStatus(SUCCESS_MESSAGE.createSuccessMessage + '-' + res.data));
    });

export const deleteBooking = (url) => (dispatch, getState) => fetch('api/cancelBooking/' + url, {
    method: 'get',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    }
}).then(res => res.json()).then(res => {
    dispatch(itemDeleteSuccess(SUCCESS_MESSAGE.deleteSuccessMessage + '-' + res.data));
    dispatch(itemFetchSucceeded(null));
});
