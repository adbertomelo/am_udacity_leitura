import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { voteComment, deleteComment } from '../utils/api'
import * as fn from '../utils/fn'
import { Icon } from 'semantic-ui-react'

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
              <div style={{fontSize:'9px'}}>
                <span>Posted by {comment.author} in {fn.getDateFormat(comment.timestamp)}</span>
              </div>
              <div>
              <span>{comment.voteScore + this.state.likes} Votes</span>
              </div>
              <div>

                <Icon link name='thumbs up outline' onClick={() => this.upVote(comment.id)}></Icon>
                <Icon link name='thumbs down outline' onClick={() => this.downVote(comment.id)}></Icon>
                <Icon link name='delete' onClick={() => this.delete(comment.id)}></Icon>

              </div>

            </div>
            
          }

      </div>
    )
  }

}

export default ViewComment