import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import BookingView from '../bookingView';
const mockStore = configureMockStore();
const store = mockStore({});

describe('BookingView Component', () => {
    it('should render correctly in  mode', () => {
        let passengerInfo = {};
        let flightInfo = [{
            'duration': '4:00',
            'price': '1240,20',
            'departureAirportCode': 'BLR',
            'arrivalAirportCode': 'LKO',
            'flightNumber': 'IN-220',
            'flightName': 'Indigo',
            'departureTime': '12:35',
            'departureAirport': 'Bangalore',
            'arrivalTime': '14:35',
            'arrivalAirport': 'Lucknow'
        }];
        const component = renderer.create(<Provider store={store}><BookingView
            flightInfo={flightInfo} passengerInfo={passengerInfo} /></Provider>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
