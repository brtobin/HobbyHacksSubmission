import React, { Component } from 'react';
import Bootstrap from 'bootstrap-4-react';
import './Home.css';
import * as $ from "jquery";
import { authEndpoint, clientId, redirectUri, scopes } from "./config_example";
import hash from "./hash";
import { HomeButton } from './components/HomeButton';
import { Header } from './components/homepage/Header';
import { OnRoad } from './components/homepage/OnRoad';
import { OnHunt  } from './components/homepage/OnHunt';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      token: null,
      item: {
        album: {
          images: [{ url: "" }]
        },
        name: "",
        artists: [{ name: "" }],
        duration_ms: 0
      },
      is_playing: "Paused",
      progress_ms: 0,
      no_data: false,
    };

    this.getCurrentlyPlaying = this.getCurrentlyPlaying.bind(this);
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    // Set token
    let _token = hash.access_token;

    if (_token) {
      // Set token
      this.setState({
        token: _token
      });
      this.getCurrentlyPlaying(_token);
    }

    // set interval for polling every 5 seconds

    this.interval = setInterval(() => this.tick(), 5000);
  }


  componentWillUnmount() {
    // clear the interval to save resources
    clearInterval(this.interval);
  }

  tick() {
    if(this.state.token) {
      this.getCurrentlyPlaying(this.state.token);
    }
  }

  getCurrentlyPlaying(token) {
    // Make a call using the token
    $.ajax({
      url: "https://api.spotify.com/v1/me/player/currently-playing",
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

        this.setState({
          item: data.item,
          is_playing: data.is_playing,
          progress_ms: data.progress_ms,
          no_data: false /* We need to "reset" the boolean, in case the

                            user does not give F5 and has opened his Spotify. */
        });
      }
    });
  }

  render() {
    return (
      <div className="HomePage">
        <div className="container mrgnbtm">
          <div className="row mx-auto">
            <div className="col-md-12">
              <Header></Header>
            </div>
          </div>
        </div>
        <div className="container">
          <div class="row">
            <div class="col">
              <OnRoad></OnRoad>
            </div>
            <div class="col">
              <OnHunt></OnHunt>
            </div>
          </div>
          <div class="row">
          {!this.state.token && (
            <a className="btn btn--loginApp-link"
             href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}>Login to Spotify</a>)}
          </div>
        </div>
      </div>     
    );
  }
}

export default Home;
