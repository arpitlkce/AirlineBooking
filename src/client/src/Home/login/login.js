import React, { Component } from 'react';
import {Container, Col, Form, Row,
    FormGroup, Label, Input,
    Button, Alert } from 'reactstrap';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import {authData} from '../../utils';

export default class Login extends Component {
    constructor (props) {
        super(props);
        this.state = {
            redirectToReferrer: false
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit = () => {
        const { handleSubmit } = this.props;
        const {userName, password} = this.state;
        let credentials = {
            userName: userName,
            password: password
        };
        handleSubmit(credentials);
    };

    handleChange (name, data) {
        let key, value;
        if (event.type === 'mousedown' || (event.type === 'click' && data)) {
            key = name;
            value = data.value || data;
        } else {
            key = event.target.name;
            value = event.target.value;
        }
        this.setState({
            [key]: value
        });
    }

    alertOpen = () => {
        const {authDetails, dismissMessage} = this.props;
        let bool = true;
        if (authDetails.auth === undefined && dismissMessage === false) {
            bool = false;
        } else if (dismissMessage === true) {
            bool = false;
        } else if (authDetails.auth === false) {
            bool = true;
        }
        return bool;
    };

    onDismiss = () => {
        const {onDismiss} = this.props;
        onDismiss(true);
    };

    componentWillReceiveProps = (next, prev) => {
        if (next.authDetails.auth) {
            authData.authenticate(() => {
                this.setState({ redirectToReferrer: true });
            });
        }
    };

    loginView = () => {
        const {authDetails} = this.props;
        return <div>
            <Alert isOpen={this.alertOpen()} toggle={this.onDismiss} color="success" fade>
                {authDetails.message}
            </Alert>
            <p className="lead heading">Go Fly AirTicket Booking System</p>
            <hr className="my-2" />
            <Container className="app">
                <Form className="form">
                    <Row form>
                        <Col>
                            <FormGroup row>
                                <Label for="name" sm={4}>User Name</Label>
                                <Col sm={4}>
                                    <Input
                                        type="text"
                                        name="userName"
                                        id="userName"
                                        onChange={this.handleChange}
                                    />
                                </Col>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormGroup row>
                                <Label for="name" sm={4}>Password</Label>
                                <Col sm={4}>
                                    <Input
                                        type="password"
                                        name="password"
                                        id="password"
                                        onChange={this.handleChange}
                                    />
                                </Col>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Button onClick={this.handleSubmit}>LogIn</Button>
                </Form>
            </Container>
        </div>;
    };

    render () {
        const { from } = this.props.location.state || { from: { pathname: '/home' } };
        const { redirectToReferrer } = this.state;

        if (redirectToReferrer) {
            return <Redirect to={from} />;
        }
        return (
            <div>
                {this.loginView()}
            </div>
        );
    }
}

Login.propTypes = {
    handleSubmit: PropTypes.function,
    onDismiss: PropTypes.function,
    authDetails: PropTypes.object,
    location: PropTypes.object,
    dismissMessage: PropTypes.bool
};
