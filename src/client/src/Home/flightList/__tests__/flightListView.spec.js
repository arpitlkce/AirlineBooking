import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import FlightListView from '../flightListView';
const mockStore = configureMockStore();
const store = mockStore({});

describe('FlightListView Component', () => {
    it('should render correctly in  mode', () => {
        let props = {
            'journeyType': 'single',
            'price': '1240,20',
            'departureAirportCode': 'BLR',
            'arrivalAirportCode': 'LKO',
            'flightNumber': 'IN-220',
            'flightName': 'Indigo',
            'departureTime': '12:35',
            'departureAirport': 'Bangalore',
            'arrivalTime': '14:35',
            'arrivalAirport': 'Lucknow'
        };
        const component = renderer.create(<Provider store={store}><FlightListView items={props} /></Provider>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
