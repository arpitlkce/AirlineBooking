import React from 'react';
import { Route, HashRouter, Redirect } from 'react-router-dom';
import HomeContainer from './Home/homeContainer';
import flightList from './Home/flightList/flightListContainer';
import Booking from './Home/booking/bookingContainer';
import Login from './Home/login/loginContainer';
import {authData} from './utils';

import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            authData.isAuthenticated ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: props.location }
                    }}
                />
            )
        }
    />
);

const App = (props) => (
    <HashRouter>
        <div>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute path="/home" component={HomeContainer} />
            <PrivateRoute path="/flightList" component={flightList} />
            <PrivateRoute path="/reviewFlight" component={Booking} />
        </div>
    </HashRouter>
);

PrivateRoute.propTypes = {
    component: PropTypes.object,
    location: PropTypes.object
};
export default App;
