import React, {Component} from 'react';
import '../css/App.css';

import Header from './Header';
import RegisterVehicleForm from './RegisterVehicleForm';
import RemoveVehicleForm from './RemoveVehicleForm';
import Vehicles from './Vehicles';

class App extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      vehicles: {}
    }
  }
  render() {
      return (
      <div>
        <Header title="Estacionamiento"/>
        <RegisterVehicleForm />
        <RemoveVehicleForm />
        <Vehicles />
      </div>
    );
  }
}

export default App;
