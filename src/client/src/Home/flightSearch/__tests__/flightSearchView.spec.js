import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import FlightSearchView from '../flightSearchView';
const mockStore = configureMockStore();
const store = mockStore({});

describe('FlightSearchView Component', () => {
    it('should render correctly in  mode', () => {
        let disableButton = false;
        const component = renderer.create(<Provider store={store}><FlightSearchView
            disableButton={disableButton} /></Provider>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
