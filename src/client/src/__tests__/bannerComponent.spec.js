import React from 'react';
import renderer from 'react-test-renderer';
import BannerComponent from '../bannerComponent';

describe('BannerComponent Component', () => {
    it('should render correctly in  mode', () => {
        const component = renderer.create(<BannerComponent />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
