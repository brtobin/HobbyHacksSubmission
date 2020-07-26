import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DrivePage.css';
import { Map } from './components/Map';
import { FindHotspots } from './components/FindHotspots';
import { Form } from './components/Form'
import { CheckIn } from './components/CheckIn';
import {HotspotTitle} from './components/huntpage/HotspotTitle';
import * as $ from "jquery";

class HuntPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentHotspot: {},
      token: props.token
    }

    var grandCentralSP = {placename: "Grand Central Share Point", placeid: "https://www.google.com/maps/embed/v1/place?key=AIzaSyBaNwCOB31e5gJqrksaSDU5_duK6POZhvw&q=place_id:ChIJZwW4XcmsB4gRYJF5spqwliQ", lib: [{song: "Hello", artist: "Adele"}]
    };
    var wiCapitalSP = {placename: "Wisconsin Capital Share Point", placeid: "https://www.google.com/maps/embed/v1/place?key=AIzaSyBaNwCOB31e5gJqrksaSDU5_duK6POZhvw&q=place_id:ChIJ5YH4falWBogR5Lpub1B0OVA", lib: [{song: "Don't Stop Believin'", artist: "Journey"}]
    };
    this.hotspots = [grandCentralSP, wiCapitalSP];
  }

getSongFromPlaylist(token) {
  $.ajax({
    url: "https://api.spotify.com/v1/me/tracks",
    type: "GET",
    beforeSend: xhr => {
      xhr.setRequestHeader("Authorization", "Bearer " + token);
    },
    success: data => {

      // Checks if the data is not empty
      if(!data) {
        this.setState({
          no_data: true,
        });

        return;
      }

      var index = this.getLibraryIndex();

      var oldHotspot = this.state.currentHotspot;
      console.log("here's thy data: " + JSON.stringify(data.items[index].track.name));
      this.state.currentHotspot.lib.push({song: data.items[index].track.name, artist: data.items[index].track.artists[0].name});  

      console.log(JSON.stringify(this.state.currentHotspot.lib))

      this.setState({currentHotspot: {}});

      this.setState({currentHotspot: oldHotspot});
    }
  });
 
}

getHotspotIndex() {
    var index = Math.floor(Math.random() * this.hotspots.length);
    return index;
}

getLibraryIndex() {
  var index = Math.floor(Math.random() * 20);
  return index;
}

loadHotspot = () => {
    var index = this.getHotspotIndex();
    document.getElementById('mapObj').src = this.hotspots[index].placeid; 
    console.log(JSON.stringify(this.hotspots));
    this.setState({ currentHotspot: this.hotspots[index]});
    this.getSongFromPlaylist(this.state.token);
}
  render() {
    console.log("current hotspot " + JSON.stringify(this.state.currentHotspot))
    console.log("current hotspots songs " + JSON.stringify(this.state.currentHotspot.song))
    console.log("prop token " + JSON.stringify(this.state.token))
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
