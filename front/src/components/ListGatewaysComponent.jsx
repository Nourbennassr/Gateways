
import React, { Component } from 'react'
import gatewayservices from '../services/gatewayservices'
class ListGatewaysComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            gateway: []

        }

       
    }
    componentDidMount() {
        gatewayservices.getGateway()
          .then((res) => {
            if (res.data == null) {
              this.props.history.push('/add-gateway/_add');
            } 
              this.setState({ gateway:res.data });
            
          })
          
            // Handle the error gracefully, e.g., display an error message to the user
        
      }
      addGateway(){
        this.props.history.push('/add-gateway/_add')
      }
    render() {
        return (
            <div>
                <h2 className='text-center'> gateway list </h2>
                <div className='row'>
                    <button onClick={this.addGateway} className='btn btn-primary'>AddGateway</button>
                </div>
                <br></br>
                <div className="row">
                <table className="table table-striped table-bordered">
                    <thead><tr>
                        <th> gateway_name</th>
                        <th> mac_address</th>
                        <th> address</th>
                        <th> sensors</th>
                        <th> cropType</th>
                        <th> climateType</th>
                        <th> farmingType</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.gateway.map((gateway) => (
                            <tr key={gateway.gateway_id}>
                                <td>{gateway.gateway_name}</td>
                                <td>{gateway.mac_address}</td>
                                <td>{gateway.address}</td>
                                <td>{gateway.sensors}</td>
                                <td>{gateway.cropType}</td>
                                <td>{gateway.climateType}</td>
                                <td>{gateway.farmingType}</td>
                                <td>
                                    <button onClick={() => this.editGateway(gateway.id)} className="btn btn-info">Update</button>
                                    <button style={{ marginLeft: "10px" }} onClick={() => this.deleteGateway(gateway.id)} className="btn btn-info">delete</button>
                                    <button style={{ marginLeft: "10px" }} onClick={() => this.viewGateway(gateway.id)} className="btn btn-info">view</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
             


                </table>
                </div>
            </div>

        )
    }
} export default ListGatewaysComponent
