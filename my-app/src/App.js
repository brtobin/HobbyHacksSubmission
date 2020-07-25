import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './components/Header';
import { getAllUsers, createUser } from './services/UserService';
import { Map } from './components/Map';
import { FindHotspots } from './components/FindHotspots';

class App extends Component {

  state = {
    user: {},
    users: [],
    numberOfUsers: 0
  }

  createUser = (e) => {
      createUser(this.state.user)
        .then(response => {
          console.log(response);
          this.setState({numberOfUsers: this.state.numberOfUsers + 1})
      });
  }

  getAllUsers = () => {
    getAllUsers()
      .then(users => {
        console.log(users)
        this.setState({users: users, numberOfUsers: users.length})
      });
  }

  onChangeForm = (e) => {
      let user = this.state.user
      if (e.target.name === 'firstname') {
          user.firstName = e.target.value;
      } else if (e.target.name === 'lastname') {
          user.lastName = e.target.value;
      } else if (e.target.name === 'email') {
          user.email = e.target.value;
      }
      this.setState({user})
  }

  render() {
    
    return (
      <div className="App">
        <Header></Header>
        <div className="container mrgnbtm">
          <div className="row">
            <div className="col-md-12">
              <Map></Map>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <FindHotspots></FindHotspots>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
