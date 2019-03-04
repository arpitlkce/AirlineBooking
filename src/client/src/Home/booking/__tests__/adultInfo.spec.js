import React from 'react';
import renderer from 'react-test-renderer';
import AdultInfo from '../adultInfo';

describe('AdultInfo Component', () => {
    it('should render correctly in  mode', () => {
        const component = renderer.create(<AdultInfo />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
