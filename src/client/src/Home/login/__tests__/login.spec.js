import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Login from '../login';
const mockStore = configureMockStore();
const store = mockStore({});

describe('Login Component', () => {
    it('should render correctly in  mode', () => {
        let dismissMessage = true;
        let authDetails = [{
            'auth': true,
            'message': 'Success'
        }];
        let location = {state: null};
        const component = renderer.create(<Provider store={store}><Login
            dismissMessage={dismissMessage} authDetails={authDetails} location={location} /></Provider>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
