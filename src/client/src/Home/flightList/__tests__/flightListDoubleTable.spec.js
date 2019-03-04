import React from 'react';
import renderer from 'react-test-renderer';
import FlightListDoubleTable from '../flightListDoubleTable';

describe('FlightListDoubleTable Component', () => {
    it('should render correctly in  mode', () => {
        const component = renderer.create(<FlightListDoubleTable />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
