import React, { Component } from 'react';
import Bootstrap from 'bootstrap-4-react';
import './Home.css';
import { HomeButton } from './components/HomeButton';
import { Header } from './components/homepage/Header';
import { OnRoad } from './components/homepage/OnRoad';
import { OnHunt  } from './components/homepage/OnHunt'

class Home extends Component {

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
            <div id="login">
              <h1>First, log in to spotify</h1>
              <a href="/login">Log in</a>
            </div>
          </div>
        </div>
      </div>     
    );
  }
}

export default Home;
