import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { votePost } from '../utils/api'

class ViewPost extends Component{

  state={likes:0}

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
      <div>
         
          {

            <div key={post.id} style={{paddingTop:'1em'}}>

              <div>
                <Link to={{pathname:"/post/" + post.id}}>{post.title}</Link>   
              </div>
              <div>
                {post.voteScore + this.state.likes}
              </div>
              <div>
                {post.timestamp}
              </div>
              <div>
                <button onClick={() => this.upVote(post.id)}>Gostei</button>
              </div>
              <div>
                <button onClick={() => this.downVote(post.id)}>Não Gostei</button>
              </div>

            </div>
            
          }

      </div>
    )
  }

}

export default ViewPost