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
  
    if(window.confirm('Delete Comment?')) {
    
      deleteComment(commentId).then((result) => {

        console.log(result)
  
      }).catch(error => {
  
        console.log(error);
  
      })
        
    };



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
                <span><b>{comment.author}</b> in {fn.getDateFormat(comment.timestamp)}</span>
              </div>

              <div className="comment-body">
                {comment.body}
              </div>
              
              <div>
                  <span className="comment-votes">{comment.voteScore + this.state.likes} Votes</span>
                  <Icon link name='thumbs up outline' onClick={() => this.upVote(comment.id)}></Icon>
                  <Icon link name='thumbs down outline' onClick={() => this.downVote(comment.id)}></Icon>
              </div>

              <div>

                <Link to={`/comment/${comment.id}`}>
                  <Icon link name='edit'></Icon>
                </Link>
                <Icon link name='delete' onClick={() => this.delete(comment.id)}></Icon>

              </div>

            </div>
            
          }

      </div>
    )
  }

}

export default ViewComment