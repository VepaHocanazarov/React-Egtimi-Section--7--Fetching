import React, { Component } from 'react'
import "./App.css"
import Pratik from './Pratik';
import axios from "axios";

class App extends Component {

  state = {
    users: [],
    isLoading: true
  };

  componentDidMount = () => {

    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(data => data.json()).then(vepa => {
          console.log(vepa);

          this.setState({
            users: vepa,
            isLoading: false
          })
        }
        )
    }, 800);

  }

  render() {

    const { isLoading } = this.state

    return (
      <div className='App'>

        <h1>Users</h1>

        {isLoading ? "Loading..." : ""}

        {
          this.state.users.map(user =>
            <div key={user.id}>
              {
                user.name
              }
              --@@
              {
                user.username
              }
            </div>
          )
        }

        <Pratik/>

      </div>
    )
  }
}

export default App;
