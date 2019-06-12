import React, { Component } from 'react';

class Vehicle extends Component {
    render() {

        const { id, title } = this.props.data;
        return (
            <tr>
                <td>{id}</td>
                <td>{title}</td>
                <td><button onClick={() => this.props.removeVehicle(id)}>Sacar vehiculo</button></td>
            </tr>
        )
    }
}

export default Vehicle;