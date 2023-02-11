import React, { Component } from 'react'
import "./App.css"
import Pratik from './Pratik';
import axios from "axios";
import Post from "./Post"

class App extends Component {

  state = {
    post: [],
    isLoading: true
  };

  componentDidMount = () => {

    setTimeout(() => {
      axios.get("https://jsonplaceholder.typicode.com/users")
        .then(vepa => vepa.data).then(vepa => {
          console.log(vepa);

          this.setState({
            post: vepa,
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

        <Post {...this.state} />

        <Pratik/>

      </div>
    )
  }
}

export default App;
