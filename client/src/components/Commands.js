import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deletePost, addVotePost, decrVotePost } from '../actions'
import { Icon } from 'semantic-ui-react'

class Commands extends Component{

  delete = (postId) => {

    if (!window.confirm('Delete Post?'))
      return

    this.props.dispatch(deletePost(postId))

  }

  upVote = (postId) => {

    this.props.dispatch(addVotePost(postId))
    
  }

  downVote = (postId) => {

    this.props.dispatch(decrVotePost(postId))

  }

  render() {
    
    const { postId } = this.props

    return (
      <div>
      
          <Icon link name='thumbs up outline' onClick={() => this.upVote(postId)}></Icon>
          <Icon link name='thumbs down outline' onClick={() => this.downVote(postId)}></Icon>
          <Icon link name='delete' onClick={() => this.delete(postId)}></Icon>

      </div>
    )
  }

}

export default connect()(Commands)
