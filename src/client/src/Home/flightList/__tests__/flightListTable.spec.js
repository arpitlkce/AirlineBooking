import React from 'react';
import renderer from 'react-test-renderer';
import FlightListTable from '../flightListTable';

describe('FlightListTable Component', () => {
    it('should render correctly in  mode', () => {
        let props = {
            'flightsData': [
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
                }]
        };

        const component = renderer.create(<FlightListTable items={props} />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
