import React, { Component } from 'react'
import LoaderHOC from './LoaderHOC';

 class Post extends Component {
  render() {
    return (
      <div>

         {

           this.props.isLoading ?

           <div>Loading...</div>
           : this.props.posts.map(post=>
            <div key = {post.id}>
                {post.title}
            </div>
            )
         }
        
      </div>
    )
  }
}

export default LoaderHOC (Post);
