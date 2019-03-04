import React from 'react';
import renderer from 'react-test-renderer';
import PassengerInfo from '../passengerInfo';

describe('FlightInfo Component', () => {
    it('should render correctly in  mode', () => {
        let passengers = {
            'Adult': {
                'Adult1': {
                    'firstName': 'arpi',
                    'lastName': 'sd',
                    'gender': 'male'
                },
                'Adult2': {
                    'firstName': 'ansh',
                    'lastName': 'sfsd',
                    'gender': 'female'
                }
            }
        };
        const component = renderer.create(<PassengerInfo passengers={passengers} />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
