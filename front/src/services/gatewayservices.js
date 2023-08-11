
import axios from 'axios';

const Gateway_API_BASE_URL = "http://127.0.0.1:5000/gateways";

class GatewayServices {
    getGateway() {
        return axios.get(Gateway_API_BASE_URL);
    }

    createGateway(gateway) {
        return axios.post(Gateway_API_BASE_URL, gateway);
    }

    getGatewayById(gatewayID) {
        return axios.get(Gateway_API_BASE_URL + "/" + gatewayID);
    }

    updateGateway(gatewayID, updatedGateway) {
        return axios.put(Gateway_API_BASE_URL + "/" + gatewayID, updatedGateway);
    }

    deleteGateway(gatewayID) {
        return axios.delete(Gateway_API_BASE_URL + "/" + gatewayID);
    }
}

export default new GatewayServices();