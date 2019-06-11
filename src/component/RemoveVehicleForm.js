import React, {Component} from 'react';

class RemoveVehicleForm extends Component{

    constructor(props) {
        super(props);
        this.licenseRef = React.createRef();
        this.removeVehicle = this.removeVehicle.bind(this);
    }
    removeVehicle(e) {
        e.preventDefault();
        const placa = this.licenseRef.current.value;
        console.log(placa);        
    }
    render() {
        return (
            <form onSubmit={this.removeVehicle}>
                <h3>Sacar vehiculo del parqueadero</h3>
                <label>
                    Placa<input type="text" className="input" id="placa" ref={this.licenseRef} />
                </label>
                <button type="submit">Aceptar</button>
            </form>
        )
    }
}

export default RemoveVehicleForm;