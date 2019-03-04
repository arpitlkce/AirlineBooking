import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import '../../style.css';
import FlightListTable from './flightListTable';
import FlightListDoubleTable from './flightListDoubleTable';
import BannerComponent from '../../bannerComponent';
import PropTypes from 'prop-types';

export default class FlightListView extends React.Component {
    constructor (props) {
        super(props);
        this.flightData = [];
        this.getSelectedRow = this.getSelectedRow.bind(this);
    }

    getSelectedRow (tableName, rowInfo) {
        const {disableBooking} = this.props;
        this.flightData.push({[tableName]: rowInfo});
        if (Object.keys(this.flightData).length > 1) {
            disableBooking(false);
        }
    }

    getFLightInfo = (flightData) => {
        const {items} = this.props;
        for (let item of items.flightsData) {
            if (flightData === item.flightData.flightNumber) {
                this.flightData.push(item);
            }
        }
    };

    reviewFlights = (flightData) => {
        const {reviewFlights} = this.props;
        let reviewFlightData;
        if (this.flightData.length < 2) {
            this.getFLightInfo(flightData);
        }
        reviewFlightData = this.flightData;
        reviewFlights(reviewFlightData);
    };

    getOneSideView () {
        const {items} = this.props;
        return <FlightListTable reviewFlights={this.reviewFlights} items={items} />;
    }
    getReturnSideView () {
        const {items} = this.props;
        return <Row>
            <Col>
                <FlightListDoubleTable
                    tableName={'departureTable'}
                    getSelectedRow={this.getSelectedRow}
                    reviewFlights={this.reviewFlights}
                    item={items.flightOneWay} />
            </Col>
            <Col>
                <FlightListDoubleTable
                    tableName={'arrivalTable'}
                    getSelectedRow={this.getSelectedRow}
                    reviewFlights={this.reviewFlights}
                    item={items.flightReturn} />
            </Col>

        </Row>;
    }

    flightListView () {
        const {items} = this.props;
        if (items.journeyType === 'single') {
            return this.getOneSideView();
        } else {
            return this.getReturnSideView();
        }
    }

    getBookingButton = () => {
        const { items, disabledButton } = this.props;
        if (items.journeyType === 'return') {
            return <Row className={'bookButton'} >
                <Button color="primary"
                    onClick={this.reviewFlights}
                    disabled={disabledButton}>
                            Book
                </Button>{' '}
            </Row>;
        }
    };

    render () {
        return (
            <div>
                <BannerComponent />
                <div className={'containerBox'}>
                    {this.flightListView()}
                    {this.getBookingButton()}
                </div>

            </div>

        );
    }
}

FlightListView.propTypes = {
    disabledButton: PropTypes.bool,
    items: PropTypes.object,
    reviewFlights: PropTypes.function,
    disableBooking: PropTypes.function
};
