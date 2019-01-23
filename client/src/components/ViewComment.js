import React, { Component } from 'react'
import * as fn from '../utils/fn'
import Modal from 'react-modal'
import EditComment from '../components/EditComment'
import CommentCommands from './CommentCommands';
import { Icon } from 'semantic-ui-react'

class ViewComment extends Component {

  state = {
    commentModalOpen: false,
  }

  openCommentModal = () => {
    this.setState(() => ({
      commentModalOpen: true,
    }))
  }

  closeCommentModal = () => {
    this.setState(() => ({
      commentModalOpen: false,
    }))
  }

  render() {

    const comment = this.props.comment

    return (
      <div>

        {
          
            <div key={comment.id}>

              <div>
                <span>{comment.author} in {fn.getDateFormat(comment.timestamp)}</span>
              </div>

              <div>
                {comment.body}
              </div>

              <div>
                <span className="comment-votes">{comment.voteScore} Votes</span>
              </div>

              <CommentCommands commentId={comment.id} />

              <Icon link link name='edit' onClick={() => this.openCommentModal()}></Icon>

            </div>
          
        }

          <Modal
            className='modal'
            ariaHideApp={false}
            isOpen={this.state.commentModalOpen}
            onRequestClose={this.closeCommentModal}
            contentLabel='Modal'>

            <EditComment comment={comment} closeCommentModal={this.closeCommentModal}></EditComment>
            
          </Modal>


      </div>
    )
  }

}


export default ViewComment
