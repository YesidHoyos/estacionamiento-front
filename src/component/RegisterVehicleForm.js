import React, {Component} from 'react';

class RegisterVehicleForm extends Component{

    constructor(props) {
        super(props);
        this.typeRef = React.createRef();
        this.licenseRef = React.createRef();
        this.engineRef = React.createRef();
        this.registerVehicle = this.registerVehicle.bind(this);
    }

    registerVehicle(e){
        e.preventDefault();
        const vehicle = {
            tipo: this.typeRef.current.value,
            placa: this.licenseRef.current.value,
            cilindraje: this.engineRef.current.value
        }

        this.props.registerVehicle(vehicle);
        
    }
    render(){
        return (
            <form onSubmit={this.registerVehicle}>
                <h3>Ingresar vehiculo al parqueadero</h3>

                <div className="tipo">
                    <label>Tipo de vehiculo</label>
                    <select name="tipo" ref={this.typeRef}>
                        <option value="1">Carro</option>
                        <option value="2">Moto</option>
                    </select>
                </div>

                <label>
                    Placa<input type="text" className="input" id="placa" ref={this.licenseRef} />
                </label>
                <label>
                    Cilindraje<input type="number" className="input" id="cilindraje" ref={this.engineRef} />
                </label>

                <button type="submit">Aceptar</button>
            </form>
        )
    }
}

export default RegisterVehicleForm;