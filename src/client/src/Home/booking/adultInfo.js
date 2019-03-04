import React from 'react';
import { Col, Row, Button, ButtonGroup, Input, Container } from 'reactstrap';
import PropTypes from 'prop-types';

export default class AdultInfo extends React.Component {
    render () {
        const {handleChange, index} = this.props;
        return (
            <Container className={'paddingBottom'}>
                <Row className={'marginInfo'}>
                    <Col md={6}>
                        <Input type="text"
                            onChange={(e) => handleChange('Adult', 'Adult' + index, e)}
                            name="firstName"
                            placeholder="First Name" />
                    </Col>
                    <Col md={6}>
                        <Input type="text"
                            onChange={(e) => handleChange('Adult', 'Adult' + index, e)}
                            name="lastName"
                            placeholder="Last Name" />
                    </Col>
                </Row>

                <Row className={'marginInfo'}>
                    <Col md={6}>
                        <ButtonGroup>
                            <Button outline color="primary"
                                onClick={(e) => handleChange('Adult', 'Adult' + index, e)}
                                value={'male'}
                                name="gender">
                                Male
                            </Button>
                            <Button outline color="primary"
                                onClick={(e) => handleChange('Adult', 'Adult' + index, e)}
                                value={'female'}
                                name="gender">
                                Female
                            </Button>
                        </ButtonGroup>
                    </Col>
                </Row>
            </Container>

        );
    }
}

AdultInfo.propTypes = {
    handleChange: PropTypes.function,
    index: PropTypes.number
};
