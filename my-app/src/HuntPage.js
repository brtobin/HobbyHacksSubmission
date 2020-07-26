import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DrivePage.css';
import { Map } from './components/Map';
import { FindHotspots } from './components/FindHotspots';
import { Form } from './components/Form'
import { CheckIn } from './components/CheckIn';
import * as $ from "jquery";

class HuntPage extends Component {

  constructor() {
    super();
    this.state = {
      currentHotspot: null
    }

    var grandCentralSP = {placeename: "Grand Central Share Point", placeid: "https://www.google.com/maps/embed/v1/place?key=AIzaSyBaNwCOB31e5gJqrksaSDU5_duK6POZhvw&q=place_id:ChIJZwW4XcmsB4gRYJF5spqwliQ"} ;
    var wiCapitalSP = {placename: "Wisconsin Capital Share Point", placid: "https://www.google.com/maps/embed/v1/place?key=AIzaSyBaNwCOB31e5gJqrksaSDU5_duK6POZhvw&q=place_id:ChIJ5YH4falWBogR5Lpub1B0OVA"};
    this.hotspots = [grandCentralSP, wiCapitalSP];
  }

getHotspotIndex() {
    var index = Math.floor(Math.random() * this.hotspots.length);
    return index;
}

loadHotspot = () => {
    console.log("HERE");
    console.log("index: " + this.getHotspotIndex());
    console.log("placeid: " + this.hotspots[this.getHotspotIndex()].placeid);
    document.getElementById('mapObj').src = this.hotspots[this.getHotspotIndex()].placeid; 
    this.setState( { currentHotspot: this.hotspots[this.getHotspotIndex()]} );
}

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
              <FindHotspots
                loadHotspot = {this.loadHotspot}
              ></FindHotspots>
            </div>
          </div>
          <div className="hotspot-info">
            {(this.state.currentHotspot != null) && (
              <h1>{this.state.currentHotspot.placeename}</h1>
            )}
          </div>
        </div>
      </div>     
    );
  }
}

export default HuntPage;
