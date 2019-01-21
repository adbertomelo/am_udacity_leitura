import React, { Component } from 'react'
import * as fn from '../utils/fn'
import Modal from 'react-modal'
import EditComment from '../components/EditComment'

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

              <button onClick={() => this.openCommentModal()}>Edit</button>

            </div>
          
        }

          <Modal
            className='modal'
            ariaHideApp={false}
            isOpen={this.state.commentModalOpen}
            onRequestClose={this.closeCommentModal}
            contentLabel='Modal'>

            <EditComment comment={comment}></EditComment>
            
          </Modal>


      </div>
    )
  }

}


export default ViewComment
