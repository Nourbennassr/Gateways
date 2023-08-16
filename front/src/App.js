import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import ListGatewayComponent from './components/ListGatewaysComponent';
import CreateGatewayComponent from './components/CreateGatewayComponent'; 
import './App.css'// Importez le composant CreateGatewayComponent
function App() {
    return (
        <div className='App'>
            <Router>
                <HeaderComponent />
                <div className='container'>
                    <Routes>
                        <Route path='/gateways' element={<ListGatewayComponent />} />
                        <Route path='/add-gateway' element={<CreateGatewayComponent />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
