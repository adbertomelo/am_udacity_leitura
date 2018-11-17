import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { fetchPostById, fetchComments } from '../utils/api'
import { CommentMetadata } from 'semantic-ui-react';

class PostDetail extends Component{

  state = {
    post:{},
    comments:[]
  }

  componentDidMount(){
    
    const postId = this.props.id

    fetchPostById(postId).then((result) => {

      this.setState({post:result})

      fetchComments(postId).then((results) => {
        this.setState({comments: results})
      }).catch( error => {
        console.log(error)
      })

    }).catch(error => {

      console.log(error);

    })

  }

  render() {
    
    const {post, comments} = this.state

    console.log(comments)

    return (
      
      <div>
        <h3>{post.title}</h3>
        <div>{post.author}</div>
        <p>{post.body}</p>
        <p>{post.category}</p>        
        <b>COMMENTS</b>
        <a href="#">Add Comment</a>|        
        {
          comments.length > 0 && (
            comments.map((comment) => (
              <div>
                <p key={comment.id}>
                  {comment.body}
                </p>
                <a href="#">Edit</a>|
                <a href="#">Del</a>|
                <a href="#">Gostei</a>|
                <a href="#">Não Gostei</a>
              </div>
            ))
            
          
        )
        }

        <Link to={{pathname:"/editpost/" + post.id}}>Edit Post</Link>|
        <Link to={{pathname:"/remove/" + post.id}}>Remove Post</Link>
      </div>)
    
  }

}

export default PostDetail