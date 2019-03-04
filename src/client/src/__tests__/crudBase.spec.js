
import configureMockStore from 'redux-mock-store'; // mock store
import thunk from 'redux-thunk';

import { login, fetchFlights, fetchBookingDetail, bookFlight, deleteBooking, fetchSearchedFlightDetail } from '../crudBase';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Mocking crudBase Class', () => {
    beforeEach(() => {
        fetch.resetMocks();
    });

    it('calls login and returns data', () => {
        fetch.mockResponse(JSON.stringify({ data: true }));
        const expectedActions = [
            { type: 'AUTH_SUCCESS', value: true }
        ];
        const store = mockStore({ isAuthSuccess: { value: '' } });
        return (
            store.dispatch(login(true))
                // getAccessToken contains the fetch call
                .then(() => {
                    // return of async actions
                    expect(store.getActions()).toEqual(expectedActions);
                })
        );
    });

    it('calls fetchFlights and returns data', () => {
        fetch.mockResponse(JSON.stringify({ data: [] }));
        const expectedActions = [
            { type: 'LISTING_SUCCESS', items: [] }
        ];
        const store = mockStore({ itemListingSucceeded: { items: [] } });
        return (
            store.dispatch(fetchFlights({}, {history: []}))
            // getAccessToken contains the fetch call
                .then(() => {
                    // return of async actions
                    expect(store.getActions()).toEqual(expectedActions);
                })
        );
    });

    it('calls fetchBookingDetail and returns no data found data', () => {
        fetch.mockResponse(JSON.stringify({ data: 'no data found' }));
        const expectedActions = [
            { type: 'ITEM_OPERATION_FAIL', item: 'no data found' }
        ];
        const store = mockStore({ itemStatus: { item: '' } });
        return (
            store.dispatch(fetchBookingDetail(1))
            // getAccessToken contains the fetch call
                .then(() => {
                    // return of async actions
                    expect(store.getActions()).toEqual(expectedActions);
                })
        );
    });

    it('calls fetchBookingDetail and returns data', () => {
        fetch.mockResponse(JSON.stringify({ data: [] }));
        const expectedActions = [
            { type: 'ITEM_FETCH_SUCCESS', item: [] }
        ];
        const store = mockStore({ itemCreateSuccess: { item: '' } });
        return (
            store.dispatch(fetchBookingDetail(1))
            // getAccessToken contains the fetch call
                .then(() => {
                    // return of async actions
                    expect(store.getActions()).toEqual(expectedActions);
                })
        );
    });

    it('calls bookFlight and returns success message found data', () => {
        fetch.mockResponse(JSON.stringify({ data: '5' }));
        const expectedActions = [
            { type: 'ITEM_OPERATION_FAIL', item: 'Your Flight has been book with booking ID-5' }
        ];
        const store = mockStore({ itemStatus: { item: '' } });
        return (
            store.dispatch(bookFlight())
            // getAccessToken contains the fetch call
                .then(() => {
                    // return of async actions
                    expect(store.getActions()).toEqual(expectedActions);
                })
        );
    });

    it('calls deleteBooking and returns success message found data', () => {
        fetch.mockResponse(JSON.stringify({ data: '5' }));
        const expectedActions = [
            { type: 'DELETE_SUCCESS', 'succeeded': true, message: 'Your Flight has been cancelled with booking ID-5' },
            {type: 'ITEM_FETCH_SUCCESS', item: null}
        ];
        const store = mockStore({ itemDeleteSuccess: { message: '' }, itemFetchSucceeded: { item: '' } });
        return (
            store.dispatch(deleteBooking())
            // getAccessToken contains the fetch call
                .then(() => {
                    // return of async actions
                    expect(store.getActions()).toEqual(expectedActions);
                })
        );
    });

    it('calls fetchSearchedFlightDetail and returns success message found data', () => {
        fetch.mockResponse(JSON.stringify({ data: true }));
        const expectedActions = [
            { type: 'ITEM_SEARCH_FETCH_SUCCESS', item: {} }
        ];
        const store = mockStore({ itemSearchFetchSucceeded: { message: '' } });
        store.dispatch(fetchSearchedFlightDetail({}, true, {history: []}));
        expect(store.getActions()).toEqual(expectedActions);
    });
});
