import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import { HomeButton } from './components/HomeButton'

class App extends Component {

  render() {
    
    return (
      <div className="DrivePage">
        <div className="container mrgnbtm">
          <div className="row mx-auto">
            <div className="col-md-12">
              <HomeButton></HomeButton>
            </div>
          </div>
        </div>
      </div>     
    );
  }
}

export default App;
