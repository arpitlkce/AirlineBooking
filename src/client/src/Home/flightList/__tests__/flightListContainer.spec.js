import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import FlightListContainer from '../flightListContainer';
const mockStore = configureMockStore();
const store = mockStore({itemListingSucceeded: [
    {
        'flightData': {
            'flightName': 'Go Air',
            'flightNumber': 'G8-428'
        },
        'departData': {
            'departureTime': '05:35',
            'departureAirport': 'New Delhi'
        },
        'arrivalData': {
            'arrivalTime': '08:35',
            'arrivalAirport': 'Bangalore'
        },

        'duration': '2:30',
        'price': '10,320',
        'departureAirportCode': 'DEL',
        'arrivalAirportCode': 'BLR'
    }]});

describe('FlightList Container Component', () => {
    it('should render correctly in  mode', () => {
        const component = renderer.create(<Provider store={store}><FlightListContainer /></Provider>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
