
import './App.css';
import React from 'react';

import { BrowserRouter as Router , Route ,Routes  } from 'react-router-dom';

import HeaderComponent from './components/HeaderComponent';
import ListGatewayComponent from './components/ListGatewaysComponent';


function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent/>
        <div className='container'>
          <Routes>
          
            <Route path ="/gateways"exact Component={ListGatewayComponent}></Route>
           
         
          </Routes>
        </div>
      </Router>
      
    </div>
  );
}

export default App;
