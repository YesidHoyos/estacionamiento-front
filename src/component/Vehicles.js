import React, {Component} from 'react';

import Vehicle from './Vehicle';

class Vehicles extends Component{
    
    showVehicles = () => {
        const vehicles = this.props.vehicles;

        if(vehicles.lenght === 0) return null;
        
        return(
            <React.Fragment>
                {
                    Object.keys(vehicles).map(vehicle => (
                        <Vehicle 
                            key={vehicle}
                            data={this.props.vehicles[vehicle]}
                            removeVehicle={this.props.removeVehicle}
                        />
                    ))
                }
            </React.Fragment>
        )
    }
    
    render(){
        return(
            <div>
                <h3>Vehiculos en el parqueadero</h3>
                <table>
                    <thead>
                         <tr> 
                              <th>Tipo de vehiculo</th>
                              <th>Placa</th>
                              <th>Fecha de ingreso</th>
                         </tr> 
                    </thead>
                    <tbody>
                        {this.showVehicles()} 
                    </tbody>
               </table>
            </div>
        )
    }
}

export default Vehicles;