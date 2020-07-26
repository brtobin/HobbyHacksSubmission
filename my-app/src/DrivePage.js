import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DrivePage.css';
import { Header } from './components/Header';
import { getAllUsers, createUser } from './services/UserService';
import { Map } from './components/Map';
import { FindHotspots } from './components/FindHotspots';
import { Form } from './components/Form'
import { CheckIn } from './components/CheckIn';
import { Other } from './components/Other';
import { Other2 } from './components/Other2';
import { Home } from './Home'
import { authEndpoint, clientId, redirectUri, scopes } from "./config_example";

class App extends Component {

  render() {
    
    return (
      <div className="DrivePage">
        <div className="container" id="container">
          <div className="row mx-auto">
            <div className="col-md-12">
              <Header></Header>
            </div>
          </div>
          <div className="row" id="driveButtons">
            <Form></Form>
          </div>
        </div>
      </div>     
    );
  }
}

export default App;
