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

class App extends Component {

  render() {
    
    return (
      <div className="DrivePage">
        <div className="container-fluid">
          <div className="row">
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
