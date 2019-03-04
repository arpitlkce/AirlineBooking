import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import LoginContainer from '../loginContainer';
const mockStore = configureMockStore();
const store = mockStore({authSuccess: {
    'auth': true,
    'message': 'Success'
}});

describe('LoginContainer Component', () => {
    it('should render correctly in  mode', () => {
        let dismissMessage = true;
        let location = {state: null};
        const component = renderer.create(<Provider store={store}><LoginContainer
            dismissMessage={dismissMessage}
            location={location} /></Provider>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
