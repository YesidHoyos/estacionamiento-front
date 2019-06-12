import React, { Component } from 'react';

import M from "materialize-css";

class RegisterVehicleForm extends Component {

  constructor(props) {
    super(props);
    this.typeRef = React.createRef();
    this.licenseRef = React.createRef();
    this.engineRef = React.createRef();
    this.registerVehicle = this.registerVehicle.bind(this);
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

  componentDidMount() {
    let select = document.querySelectorAll('select')
    let modal = document.querySelectorAll('.modal')
    const options = {
      dismissible: false
    }
    M.Modal.init(modal, options)
    M.FormSelect.init(select)
  } 
  render() {
    return (
      <div id="ingresar" className="modal">
        <div className="modal-content">
          <form onSubmit={this.registerVehicle}>
            <h4>Ingresar vehiculo al parqueadero</h4>
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

            <div className="modal-footer">
              <a href="#!" className="modal-close waves-effect btn-flat">Cancelar</a>
              <button type="submit" className="modal-close waves-effect btn-flat">Aceptar</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default RegisterVehicleForm;