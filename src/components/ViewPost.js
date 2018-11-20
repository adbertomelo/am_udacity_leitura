import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { votePost, deletePost } from '../utils/api'
import * as fn from '../utils/fn'
import { Container, Icon } from 'semantic-ui-react'

class ViewPost extends Component{

  state={likes:0}

  delete = (postId) => {
    
    deletePost(postId).then((result) => {

      console.log("post deleted")

    }).catch(error => {

      console.log(error);

    })
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

  render() {

    const post = this.props.post

    return (
      <Container>
         
          {

            <div key={post.id} style={{paddingTop:'1em'}}>

              <div>
                <Link to={{pathname:"/post/" + post.id}}>{post.title}</Link>   
              </div>
              <div>
                {post.voteScore + this.state.likes}
              </div>
              <div>
                {fn.getDateFormat(post.timestamp)}
              </div>
              <div>
                <Icon link name='thumbs up outline' onClick={() => this.upVote(post.id)}></Icon>
                <Icon link name='thumbs down outline' onClick={() => this.downVote(post.id)}></Icon>
                <Icon link name='delete' onClick={() => this.delete(post.id)}></Icon>
                
              </div>

            </div>
            
          }

      </Container>
    )
  }

}

export default ViewPost