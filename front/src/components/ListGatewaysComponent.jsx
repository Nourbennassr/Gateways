import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'



class ListGatewaysComponent extends Component {    
    state = {
        gateways: [] // Initialize with an empty array for multiple gateways
    }

    componentDidMount() {
        fetch('http://127.0.0.1:5000/gateways')
            .then((response) => response.json())
            .then((result) => {
                this.setState({ gateways: result });
            });
    }

    render() {
        return (
            <div className="App">
                <h1>Our Gateways</h1>
                <div className="add-button">
                    <button type="button" class="btn btn-success" >Add Gateway</button>
                </div>
                <div className="table-container">
                <table class="table table-striped table-bordered" >
                    <thead class="thead-dark">
                        <tr>
                            <th >Gateway_name</th>
                            <th >Address</th>
                            <th>Climate_Type</th>
                            <th >Crop_Type</th>
                            <th >Farming_Type</th>
                            <th >Mac_Address</th>
                            <th >Sensors</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.gateways.map((gateway, index) => (
                            <tr  scope="row" key={index}>
                                <td >{gateway.gateway_name}</td>
                                <td>{gateway.address}</td>
                                <td>{gateway.climateType}</td>
                                <td>{gateway.cropType}</td>
                                <td>{gateway.farmingType}</td>
                                <td>{gateway.mac_address}</td>
                                <td>{gateway.sensors.join(', ')}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
             </div>
        </div>
        );
    
                    
        
    }
}

export default ListGatewaysComponent;
