import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DrivePage.css';
import { Map } from './components/Map';
import { FindHotspots } from './components/FindHotspots';
import { Form } from './components/Form'
import { CheckIn } from './components/CheckIn';
import {HotspotTitle} from './components/huntpage/HotspotTitle'
import * as $ from "jquery";

class HuntPage extends Component {

  constructor() {
    super();
    this.state = {
      currentHotspot: {}
    }

    var grandCentralSP = {placename: "Grand Central Share Point", placeid: "https://www.google.com/maps/embed/v1/place?key=AIzaSyBaNwCOB31e5gJqrksaSDU5_duK6POZhvw&q=place_id:ChIJZwW4XcmsB4gRYJF5spqwliQ"} ;
    var wiCapitalSP = {placename: "Wisconsin Capital Share Point", placeid: "https://www.google.com/maps/embed/v1/place?key=AIzaSyBaNwCOB31e5gJqrksaSDU5_duK6POZhvw&q=place_id:ChIJ5YH4falWBogR5Lpub1B0OVA"};
    this.hotspots = [grandCentralSP, wiCapitalSP];
  }

getHotspotIndex() {
    var index = Math.floor(Math.random() * this.hotspots.length);
    return index;
}

loadHotspot = () => {
    var index = this.getHotspotIndex();
    document.getElementById('mapObj').src = this.hotspots[index].placeid; 
    console.log(JSON.stringify(this.hotspots));
    this.setState({ currentHotspot: this.hotspots[index]});
}
  render() {
    console.log("current hotspot " + JSON.stringify(this.state.currentHotspot))
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
          <div className="hotspotTitle">
            <HotspotTitle
              currentHotspot = {this.state.currentHotspot}
            ></HotspotTitle>
          </div>
        </div>
      </div>     
    );
  }
}

export default HuntPage;
