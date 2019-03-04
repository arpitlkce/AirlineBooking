import React from 'react';
import renderer from 'react-test-renderer';
import FlightInfo from '../flightInfo';

describe('FlightInfo Component', () => {
    it('should render correctly in  mode', () => {
        let props = {
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
        };
        const component = renderer.create(<FlightInfo item={props} />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
