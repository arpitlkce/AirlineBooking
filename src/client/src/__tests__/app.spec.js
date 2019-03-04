import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import App from '../app';
const mockStore = configureMockStore();
const store = mockStore({authSuccess: {}});

describe('App Component', () => {
    it('should render correctly in  mode', () => {
        const component = renderer.create(<Provider store={store}><App /></Provider>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
