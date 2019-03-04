import React from 'react';
import renderer from 'react-test-renderer';
import InfantInfo from '../infantInfo';

describe('InfantInfo Component', () => {
    it('should render correctly in  mode', () => {
        const component = renderer.create(<InfantInfo />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
