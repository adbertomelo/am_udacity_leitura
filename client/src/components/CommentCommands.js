import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteComment, addVoteComment, decrVoteComment } from '../actions/CommentsActions'
import { Icon } from 'semantic-ui-react'

class CommentCommands extends Component{

  delete = (commentId) => {

    if (!window.confirm('Delete Comment?'))
      return

    this.props.dispatch(deleteComment(commentId))

  }

  upVote = (commentId) => {

    this.props.dispatch(addVoteComment(commentId))
    
  }

  downVote = (commentId) => {

    this.props.dispatch(decrVoteComment(commentId))

  }

  render() {
    
    const { commentId } = this.props

    return (
      <div style={{float:"left"}}>
      
          <Icon link name='delete' onClick={() => this.delete(commentId)}></Icon>
          <Icon link name='thumbs up outline' onClick={() => this.upVote(commentId)}></Icon>
          <Icon link name='thumbs down outline' onClick={() => this.downVote(commentId)}></Icon>

      </div>
    )
  }

}

export default connect()(CommentCommands)
