import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import PropTypes from 'prop-types';

export default class FlightListDoubleTable extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            selected: null
        };
    }

    getSelectedRow (rowInfo) {
        const {getSelectedRow} = this.props;
        getSelectedRow(this.selectTable.getResolvedState().name, rowInfo);
    }

    render () {
        const {item, tableName} = this.props;
        return (
            <div>
                <ReactTable
                    data={item}
                    name={tableName}
                    ref={(r) => {
                        this.selectTable = r;
                    }}
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

                        }
                    ]}
                    defaultPageSize={5}
                    className="-striped -highlight transitTable"
                    getTrProps={(state, rowInfo, col, instance) => {
                        if (rowInfo && rowInfo.row) {
                            return {
                                onClick: (e) => {
                                    this.setState({
                                        selected: rowInfo.index
                                    });
                                    this.getSelectedRow(rowInfo.original);
                                },
                                style: {
                                    background: rowInfo.index === this.state.selected ? '#00afec' : 'white',
                                    color: rowInfo.index === this.state.selected ? 'white' : 'black'
                                }
                            };
                        } else {
                            return {};
                        }
                    }
                    }
                />
            </div>
        );
    }
}

FlightListDoubleTable.propTypes = {
    item: PropTypes.Array,
    getSelectedRow: PropTypes.function,
    tableName: PropTypes.string
};
