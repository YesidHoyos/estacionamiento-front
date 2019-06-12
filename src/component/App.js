import React, { Component } from 'react';
import axios from 'axios';

import "materialize-css/dist/css/materialize.min.css";

import Header from './Header';
import RegisterVehicleForm from './RegisterVehicleForm';
import RemoveVehicleForm from './RemoveVehicleForm';
import Vehicles from './Vehicles';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      vehicles: []
    }
  }

  componentDidMount() {
    this.getVehicles();
  }

  getVehicles = () => {
    axios.get(`http://localhost:8080/vehiculos`)
      .then(response => {
        const vehicles = [...response.data];
        vehicles.map(vehicle => (
          vehicle.tipo === 1 ? vehicle.tipo = "Carro" 
          : (vehicle.tipo === 2 ? vehicle.tipo = "Moto" : null)
        ))
    
        this.setState({
          vehicles: response.data
        })
      })
      .catch((error) => console.log(error))
  }

  removeVehicle = (license) => {
    axios.post(`http://localhost:8080/vehiculo/sacar?placa=${license}`)
      .then(response => {
        if (response.status === 200) {
          const vehicles = [...this.state.vehicles];
          let result = vehicles.filter(vehicle => (      
            vehicle.placa !== license
          ));          
          this.setState({
            vehicles: result
          })
        }
      })
      .catch((error) => console.log(error))
  }

  registerVehicle = (vehicle) => {
    const { tipo, placa, cilindraje } = vehicle;

    axios.post(`http://localhost:8080/vehiculo/ingresar`,
      {
        tipo: tipo,
        placa: placa,
        cilindraje: cilindraje
      })
      .then(response => {
        if (response.status === 200) {

          const newVehicle = response.data;
          
          newVehicle.tipo === 1 ? newVehicle.tipo = "Carro" 
          : (newVehicle.tipo === 2 ? newVehicle.tipo = "Moto" : newVehicle.tipo = null);

          this.setState(prevState => ({
            vehicles: [...prevState.vehicles, newVehicle]
          }))
        } else {
          console.log('mal');
        }
      })
      .catch((error) => console.log(error))
  }

  render() {
    return (
      <div>
        <Header title="Estacionamiento" />
        <RegisterVehicleForm registerVehicle={this.registerVehicle} />
        {/* <RemoveVehicleForm /> */}
        <Vehicles vehicles={this.state.vehicles} removeVehicle={this.removeVehicle} />
      </div>
    );
  }
}

export default App;
