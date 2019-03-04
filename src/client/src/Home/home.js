import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Container, Alert } from 'reactstrap';
import classnames from 'classnames';
import FlightSearchContainer from './flightSearch/flightSearchContainer';
import StatusContainer from './status/statusContainer';
import BannerComponent from '../bannerComponent';
import PropTypes from 'prop-types';
import {authData} from '../utils';

export default class Home extends React.Component {
    constructor (props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle (tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    onDismiss = () => {
        const {onDismiss} = this.props;
        onDismiss(false);
    };

    signOut = () => {
        const {signOut, history} = this.props;
        authData.signout(() => history.push('/login'));
        signOut(false);
    };

    render () {
        const {props} = this;
        const { status } = this.props;
        return (
            <div>
                <BannerComponent signOut={this.signOut} />
                { status && <Alert toggle={this.onDismiss} color="success" fade>
                    {status}
                </Alert>}

                <Container>
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '1' })}
                                onClick={() => { this.toggle('1'); }}
                            >
                                New Booking
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '2' })}
                                onClick={() => { this.toggle('2'); }}
                            >
                                Check Status
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                            <Row>
                                <Col sm="12">
                                    <FlightSearchContainer {...props} />
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="2">
                            <Row>
                                <Col>
                                    <StatusContainer {...props} />
                                </Col>
                            </Row>
                        </TabPane>
                    </TabContent>
                </Container>
            </div>

        );
    }
}

Home.propTypes = {
    onDismiss: PropTypes.function,
    signOut: PropTypes.function,
    history: PropTypes.object,
    status: PropTypes.object
};
