import React, { Component } from 'react'
import "./App.css"
import Pratik from './Pratik';
import axios from "axios";
import Post from "./Post"

class App extends Component {

  state = {
    posts: [],
    isLoading: true
  };

  componentDidMount = () => {


    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(vepa => vepa.data).then(vepa => 
        {

        setTimeout(() => {
          this.setState({
            posts: vepa,
            isLoading: false
          })
        },800);

      }
      )
  }

  render() {



    return (
      <div className='App'>

        <Post {...this.state} />

        <Pratik />

      </div>
    )
  }
}

export default App;
