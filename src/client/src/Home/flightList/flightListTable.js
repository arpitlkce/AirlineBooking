import React from 'react';
import { Button } from 'reactstrap';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import PropTypes from 'prop-types';

export default class FlightListTable extends React.Component {
    constructor (props) {
        super(props);
        this.reviewFlights = this.reviewFlights.bind(this);
    }
    reviewFlights = (flightId) => {
        const {reviewFlights} = this.props;
        reviewFlights(flightId.value.flightNumber);
    };

    render () {
        const {items} = this.props;
        return (
            <div>
                <ReactTable
                    data={items.flightsData}
                    columns={[
                        {
                            Header: 'Flight',
                            accessor: 'flightData',
                            Cell: cellInfo => (<div className={'align-center'}>
                                <div>{cellInfo.row.flightData.flightName}</div>
                                <div>{cellInfo.row.flightData.flightNumber}</div>
                            </div>)
                        },
                        {
                            Header: 'Departure',
                            accessor: 'departData',
                            Cell: cellInfo => (<div className={'align-center'}>
                                <div>{cellInfo.row.departData.departureTime}</div>
                                <div>{cellInfo.row.departData.departureAirport}</div>
                            </div>)
                        },
                        {
                            Header: 'Arrival',
                            accessor: 'arrivalData',
                            Cell: cellInfo => (<div className={'align-center'}>
                                <div>{cellInfo.row.arrivalData.arrivalTime}</div>
                                <div>{cellInfo.row.arrivalData.arrivalAirport}</div>
                            </div>)

                        },
                        {
                            Header: 'Duration',
                            accessor: 'duration',
                            Cell: cellInfo => (<div className={'align-center'}>{cellInfo.row.duration}</div>)

                        },
                        {
                            Header: 'Price',
                            accessor: 'price',
                            Cell: cellInfo => (<div className={'align-center'}>{cellInfo.row.price}</div>)

                        },
                        {
                            Header: '',
                            accessor: 'flightData',
                            id: '',
                            Cell: ({value}) => (<Button onClick={(e) => this.reviewFlights({value})}>Book</Button>)

                        }
                    ]}
                    defaultPageSize={1}
                    className="-striped -highlight transitTable"
                />
            </div>
        );
    }
}

FlightListTable.propTypes = {
    items: PropTypes.object,
    reviewFlights: PropTypes.function
};
