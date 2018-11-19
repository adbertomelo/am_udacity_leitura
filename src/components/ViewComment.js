import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { voteComment, deleteComment } from '../utils/api'
import * as fn from '../utils/fn'

class ViewComment extends Component{

  state={likes:0}

  upVote = (commentId) => {
    
      voteComment(commentId,"upVote").then((result) => {

        let totalLikes = this.state.likes
        totalLikes = totalLikes + 1
        this.setState({likes: totalLikes})
    

    }).catch(error => {

      console.log(error);

    })


  }

  delete = (commentId) => {
    
    deleteComment(commentId).then((result) => {

      console.log("comment deleted")

  }).catch(error => {

    console.log(error);

  })


}

  downVote = (commentId) => {
    
    voteComment(commentId,"downVote").then((result) => {

      let totalLikes = this.state.likes
      totalLikes = totalLikes - 1
      this.setState({likes: totalLikes})
  

  }).catch(error => {

    console.log(error);

  })


}

  render() {

    const comment = this.props.comment

    return (
      <div>
         
          {

            <div key={comment.id} style={{paddingTop:'1em'}}>

              <div>
                <Link to={{pathname:"/comment/" + comment.id}}>{comment.body}</Link>   
              </div>
              <div>
                {comment.voteScore + this.state.likes}
              </div>
              <div>
                {fn.getDateFormat(comment.timestamp)}
              </div>
              <div>
                <button onClick={() => this.upVote(comment.id)}>Gostei</button>
                <button onClick={() => this.downVote(comment.id)}>Não Gostei</button>
                <button onClick={() => this.delete(comment.id)}>Del Comment</button>
              </div>

            </div>
            
          }

      </div>
    )
  }

}

export default ViewComment