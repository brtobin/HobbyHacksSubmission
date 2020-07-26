import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DrivePage.css';
import { Map } from './components/Map';
import { FindHotspots } from './components/FindHotspots';
import { Form } from './components/Form'
import { CheckIn } from './components/CheckIn';

class HuntPage extends Component {

  render() {
    
    return (
      <div className="HuntPage">
        <div className="container-fluid mrgnbtm">
          <div className="row">
            <div className="col-12">
              <Map></Map>
            </div>
          </div>
          <div className="row" id="buttons">
            <div className="col-12">
              <FindHotspots></FindHotspots>
            </div>
          </div>
        </div>
      </div>     
    );
  }
}

export default HuntPage;
