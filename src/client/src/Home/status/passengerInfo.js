import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import PropTypes from 'prop-types';

var flattenObject = function (ob) {
    var toReturn = [];
    let bool = true;
    for (var i in ob) {
        if (!ob.hasOwnProperty(i)) { continue; }
        if ((typeof ob[i]) === 'object' && (typeof (ob[i].firstname) !== 'object')) {
            bool = true;
            var flatObject = flattenObject(ob[i]);
            for (var x in flatObject) {
                if (!flatObject.hasOwnProperty(x)) continue;
                toReturn.push(flatObject[x]);
            }
        } else {
            if (bool) {
                toReturn.push(ob);
            }
            bool = false;
        }
    }
    return toReturn;
};

export default class PassengerInfoView extends React.Component {
    getPassengerData = () => {
        const {passengers} = this.props;
        return flattenObject(passengers);
    };

    render () {
        return (
            <div>
                <ReactTable
                    data={this.getPassengerData()}
                    columns={[
                        {
                            Header: 'FirstName',
                            accessor: 'firstName'
                        },
                        {
                            Header: 'Last Name',
                            accessor: 'lastName'
                        },
                        {
                            Header: 'Gender',
                            accessor: 'gender'

                        }
                    ]}
                    defaultPageSize={3}
                    className="-striped -highlight transitTable"
                />
            </div>
        );
    }
}

PassengerInfoView.propTypes = {
    passengers: PropTypes.object
};
