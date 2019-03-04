import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Home from '../home';
const mockStore = configureMockStore();
const store = mockStore({});

describe('Home Component', () => {
    it('should render correctly in  mode', () => {
        const component = renderer.create(<Provider store={store}><Home /></Provider>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
