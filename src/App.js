import React, { Component } from 'react'
import "./App.css"

class App extends Component {

  state = {
    users: []
  };

  componentDidMount = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(data => data.json()).then(vepa => {
        console.log(vepa);

        this.setState({
          users: vepa
        })
      }
      )
  }



  render() {
    return (
      <div className='App'>

        <h1>Users</h1>

        {
          this.state.users.map(user => 
            <div key = {user.id}>
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



      </div>
    )
  }
}

export default App;
