import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { fetchPostById, fetchComments , votePost} from '../utils/api'
import ViewComment from './ViewComment'

class PostDetail extends Component{

  state = {
    post:{},
    comments:[],
    likes:0
  }

  upVote = (postId) => {
    
      votePost(postId,"upVote").then((result) => {

        let totalLikes = this.state.likes
        totalLikes = totalLikes + 1
        this.setState({likes: totalLikes})
    

    }).catch(error => {

      console.log(error);

    })


  }

  downVote = (postId) => {
    
    votePost(postId,"downVote").then((result) => {

      let totalLikes = this.state.likes
      totalLikes = totalLikes - 1
      this.setState({likes: totalLikes})
  

  }).catch(error => {

    console.log(error);

    })
  }

  componentDidMount(){
    
    const postId = this.props.id

    fetchPostById(postId).then((result) => {

      this.setState({post:result})

      fetchComments(postId).then((results) => {
        this.setState({comments: results})
        console.log({comments: results})
      }).catch( error => {
        console.log(error)
      })

    }).catch(error => {

      console.log(error);

    })

  }

  render() {
    
    const {post, comments, likes } = this.state

    console.log(comments)

    return (
      
      <div>
        <h3>Title:{post.title}</h3>
        <div>Author:{post.author}</div>
        <p>Body:{post.body}</p>
        <p>Cat:{post.category}</p>        
        <p>Score:{post.voteScore + likes}</p>
        <b>COMMENTS</b>
        <div>
          <Link to={{pathname:"/newcomment/" + post.id}}>Add Comment</Link>|
        </div>
        
        {
          comments.length > 0 && (
            comments.map((comment) => (
              <ViewComment key={comment.id} comment={comment}/>
            ))
            
          
        )
        }
        <p>Post:</p>
        <Link to={{pathname:"/editpost/" + post.id}}>Edit Post</Link>|
        <Link to={{pathname:"/remove/" + post.id}}>Remove Post</Link>
        
        <div>
                <button onClick={() => this.upVote(post.id)}>Gostei</button>
                <button onClick={() => this.downVote(post.id)}>Não Gostei</button>
              </div>


      </div>)
    
  }

}

export default PostDetail