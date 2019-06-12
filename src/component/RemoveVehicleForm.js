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
        this.props.removeVehicle(placa);      
    }
    render() {
        return (
            <div className="container">
                <form ref={this.formRef} onSubmit={this.removeVehicle} className="col s8">
                    <h5 className="center">Sacar vehiculo</h5>
                    <div className="input-field col s12">
                        <input type="text" className="validate" id="placaRemove" ref={this.licenseRef} required/>
                        <label htmlFor="placaRemove">Placa</label>
                    </div>
                    <button type="submit" className="waves-effect btn-flat right">Aceptar</button>
                </form>
            </div>
        )
    }
}

export default RemoveVehicleForm;