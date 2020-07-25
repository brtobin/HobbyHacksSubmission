import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './components/Header';
import { getAllUsers, createUser } from './services/UserService';
import { Map } from './components/Map';
import { FindHotspots } from './components/FindHotspots';
import { CheckIn } from './components/CheckIn';

class App extends Component {

  render() {
    
    return (
      <div className="App">
        <Header></Header>
        <div className="container mrgnbtm">
          <div className="row">
            <div className="col-md-12">
              <Map>
              </Map>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <CheckIn></CheckIn>
            </div>
            <div className="col-md-4">
              <FindHotspots>
              </FindHotspots>
            </div>
            <div className="col-md-4"></div>
              <div id='test'>
                <p>Hello</p>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
