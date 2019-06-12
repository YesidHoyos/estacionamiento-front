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
            <div className="container">
                <h3 className="center">Vehiculos en el parqueadero</h3>
                <table className="highlight">
                    <thead>
                         <tr> 
                              <th>Tipo de vehiculo</th>
                              <th>Placa</th>
                              <th>Fecha de ingreso</th>
                              <th>Acción</th>
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