import React from 'react';
import { Col, Row, Button, ButtonGroup, Input, Container } from 'reactstrap';

import {getClassName} from '../../utils';
import PropTypes from 'prop-types';

export default class InfantInfo extends React.Component {
    render () {
        const {handleChange, index} = this.props;
        return (
            <Container className={'paddingBottom'}>
                <Row className={'marginInfo'}>
                    <Col md={6}>
                        <Input type="text"
                            onChange={(e) => handleChange('Infant', 'Infant' + index, e)}
                            name="firstName"
                            placeholder="First Name" />
                    </Col>
                    <Col md={6}>
                        <Input type="text"
                            onChange={(e) => handleChange('Infant', 'Infant' + index, e)}
                            name="lastName"
                            placeholder="Last Name" />
                    </Col>
                </Row>
                <Row className={'marginInfo'}>
                    <Col md={6}>
                        <ButtonGroup>
                            <Button outline color="primary"
                                className={getClassName(this.state, 'gender', 'male')}
                                onClick={(e) => handleChange('Infant', 'Infant' + index, e)}
                                value={'male'}
                                name="gender">
                                Male
                            </Button>
                            <Button outline color="primary"
                                className={getClassName(this.state, 'gender', 'female')}
                                onClick={(e) => handleChange('Infant', 'Infant' + index, e)}
                                value={'female'}
                                name="gender">
                                Female
                            </Button>
                        </ButtonGroup>
                    </Col>
                    <Col md={6}>
                        <Input type="text"
                            onChange={(e) => handleChange('Infant', 'Infant' + index, e)}
                            name="age"
                            placeholder="Age" />
                    </Col>
                </Row>

            </Container>

        );
    }
}

InfantInfo.propTypes = {
    handleChange: PropTypes.function,
    index: PropTypes.number
};
