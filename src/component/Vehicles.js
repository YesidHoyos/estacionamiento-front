import React, {Component} from 'react';

import Vehicle from './Vehicle';

class Vehicles extends Component{
    render(){
        return(
            <div>
                <p>Vehiculos en parqueadero</p>
                <Vehicle />
            </div>
        )
    }
}

export default Vehicles;