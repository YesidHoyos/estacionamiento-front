import React, { Component } from 'react';

class Vehicle extends Component {
    render() {

        const { tipo, placa, fechaIngreso } = this.props.data;
        return (
            <tr>
                <td>{tipo}</td>
                <td>{placa}</td>
                <td>{fechaIngreso}</td>
                <td><button className="waves-effect btn-flat" onClick={() => this.props.removeVehicle(placa)}>Sacar vehiculo</button></td>
            </tr>
        )
    }
}

export default Vehicle;