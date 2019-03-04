import React from 'react';
import { NavbarBrand, Navbar, NavItem, Nav, Button } from 'reactstrap';
import PropTypes from 'prop-types';

export default class BannerComponent extends React.Component {
    render () {
        const {signOut} = this.props;
        return (
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Go Fly</NavbarBrand>
                <Nav className="mar-auto" navbar>
                    <NavItem>
                        <h3> Welcome to Go Fly </h3>
                    </NavItem>
                </Nav>
                <Button color="light" onClick={signOut}>Log Out</Button>
            </Navbar>
        );
    }
}

BannerComponent.propTypes = {
    signOut: PropTypes.function
};
