import React, { Component } from 'react';
import axios from 'axios';
import '../css/App.css';

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
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then(response => {
        this.setState({
          vehicles: response.data
        })
      })
  }

  removeVehicle = (license) => {
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${license}`)
      .then(response => {
        if (response.status === 200) {
          const vehicles = [...this.state.vehicles];

          let result = vehicles.filter(vehicle => (
            vehicle.id !== license
          ));
          this.setState({
            vehicles: result
          })
        }
      })
  }

  registerVehicle = (vehicle) => {
    axios.post(`https://jsonplaceholder.typicode.com/posts`, { vehicle })
      .then(response => {
        if (response.status === 201) {
  
          const newVehicle = response.data.post;

          this.setState(prevState => ({
            vehicles: [...prevState.vehicles, newVehicle]
          }))
        }
      })
  }

  render() {
    return (
      <div>
        <Header title="Estacionamiento" />
        <RegisterVehicleForm registerVehicle={this.registerVehicle} />
        <RemoveVehicleForm />
        <Vehicles vehicles={this.state.vehicles} removeVehicle={this.removeVehicle} />
      </div>
    );
  }
}

export default App;
