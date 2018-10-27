import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { fetchPostById } from '../utils/api'

class PostsDetail extends Component{

  state = {
    post:{}
  }

  componentDidMount(){
    
    fetchPostById(this.props.id).then((result) => {

      this.setState({post:result})

    }).catch(error => {

      console.log(error);

    })

  }

  render() {
    
    const {post} = this.state

    return (
      
      <div>
        <p>Details</p>
        <p>{post.author}</p>
        <p>{post.body}</p>
        <p>{post.category}</p>
        <p>{post.title}</p>
        <Link to={{pathname:"/editpost/" + post.id}}>Edit</Link>
      </div>)
    
  }

}

export default PostsDetail