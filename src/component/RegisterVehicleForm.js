import React, { Component } from 'react';
import Materialize from "materialize-css";

class RegisterVehicleForm extends Component {

  constructor(props) {
    super(props);
    this.typeRef = React.createRef();
    this.licenseRef = React.createRef();
    this.engineRef = React.createRef();
    this.registerVehicle = this.registerVehicle.bind(this);
  }

  componentDidMount() {
    let select = document.querySelectorAll('select')
    Materialize.FormSelect.init(select)
  }

  registerVehicle(e) {
    e.preventDefault();
    const vehicle = {
      placa: this.licenseRef.current.value,
      tipo: parseInt(this.typeRef.current.value),      
      cilindraje: parseInt(this.engineRef.current.value)
    }

    this.props.registerVehicle(vehicle);

  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.registerVehicle} className="col s8">
          <h5 className="center">Ingresar vehiculo</h5>
          <div className="input-field col s12">
            <select name="tipo" ref={this.typeRef}>
              <option value="1">Carro</option>
              <option value="2">Moto</option>
            </select>
          </div>
          <div className="input-field col s12">
            <input type="text" className="validate" id="placa" ref={this.licenseRef} required/>
            <label htmlFor="placa">Placa</label>
          </div>

          <div className="input-field col s12">
            <input type="number" className="validate" id="cilindraje" ref={this.engineRef} required/>
            <label htmlFor="cilindraje">Cilindraje</label>
          </div>
          <button type="submit" className="waves-effect btn-flat right">Aceptar</button>
        </form>
      </div>
    )
  }
}

export default RegisterVehicleForm;