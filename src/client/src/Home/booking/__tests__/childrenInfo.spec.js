import React from 'react';
import renderer from 'react-test-renderer';
import ChildrenInfo from '../childrenInfo';

describe('ChildrenInfo Component', () => {
    it('should render correctly in  mode', () => {
        const component = renderer.create(<ChildrenInfo />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
