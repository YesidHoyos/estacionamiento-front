import React, { Component } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

import "materialize-css/dist/css/materialize.min.css";
import '../css/App.css'
import Header from './Header';
import RegisterVehicleForm from './RegisterVehicleForm';
import RemoveVehicleForm from './RemoveVehicleForm';
import Vehicles from './Vehicles';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      vehicles: [],
      TRM: "" 
    }
  }

  componentDidMount() {
    this.getVehicles();
    this.getTRM();
  }

  getTRM(){
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const dateTRM = `${year}-${month}-${day}T00:00:00.000`
    
    axios.get(`https://www.datos.gov.co/resource/32sa-8pi3.json?vigenciahasta=${dateTRM}`)
        .then(response => {   
          console.log(response);       
          this.setState({           
            TRM: response.data[0].valor
         })         
       })
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
    axios.put(`http://localhost:8080/parqueadero/vehiculos/${license}`)
      .then(response => {
        if (response.status === 200) {
          Swal.fire(`Total a pagar: ${response.data.totalAPagar}`)
          const vehicles = [...this.state.vehicles];
          let result = vehicles.filter(vehicle => (      
            vehicle.placa !== license
          ));          

          this.setState({
            vehicles: result
          })          
        }
      })
      .catch((error) => (
        Swal.fire({
          type: 'error',
          title: 'Error',
          text: `${error.response.data}`
        })
      ))
  }

  registerVehicle = (vehicle) => {
    const { tipo, placa, cilindraje } = vehicle;

    axios.post(`http://localhost:8080/parqueadero/vehiculos`,
      {
        tipo: tipo,
        placa: placa,
        cilindraje: cilindraje
      })
      .then(response => {
        if (response.status === 200) {
          Swal.fire(
            'Vehiculo ingresado!',
            'Se ingresó el vehiculo al parqueadero correctamente',
            'success'
          );
          const newVehicle = response.data;
          
          newVehicle.tipo === 1 ? newVehicle.tipo = "Carro" 
          : (newVehicle.tipo === 2 ? newVehicle.tipo = "Moto" : newVehicle.tipo = null);

          this.setState(prevState => ({
            vehicles: [...prevState.vehicles, newVehicle]
          }))
        }
      })
      .catch((error) => (
        Swal.fire({
          type: 'error',
          title: 'Error',
          text: `${error.response.data}`
        }) 
      ))
  }

  render() {
    return (
      <div className="row">
        <Header title="Estacionamiento" trm={this.state.TRM}/>
        <div className="col s4">
          <div className="fix">
            <RegisterVehicleForm registerVehicle={this.registerVehicle} />
            <RemoveVehicleForm removeVehicle={this.removeVehicle}/>
            </div>
        </div>
        <div className="col s8">
          <Vehicles vehicles={this.state.vehicles} removeVehicle={this.removeVehicle} />
        </div>
      </div>
    );
  }
}

export default App;
