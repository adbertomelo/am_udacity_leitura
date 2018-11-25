import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { votePost, deletePost } from '../utils/api'
import * as fn from '../utils/fn'
import { Container, Icon } from 'semantic-ui-react'

class ViewPost extends Component {

  state = { likes: 0, deleted: false }

  delete = (postId) => {

    if (!window.confirm('Delete Post?'))
      return

    deletePost(postId).then((result) => {

      this.setState({deleted: result.deleted})

    }).catch(error => {

      console.log(error);

    })
  }

  upVote = (postId) => {

    votePost(postId, "upVote").then((result) => {

      let totalLikes = this.state.likes
      totalLikes = totalLikes + 1
      this.setState({ likes: totalLikes })


    }).catch(error => {

      console.log(error);

    })


  }

  downVote = (postId) => {

    votePost(postId, "downVote").then((result) => {

      let totalLikes = this.state.likes
      totalLikes = totalLikes - 1
      this.setState({ likes: totalLikes })


    }).catch(error => {

      console.log(error);

    })


  }

  render() {

    const post = this.props.post

    return (
      <Container>

        {
          !this.state.deleted && (
          <div key={post.id} style={{ paddingTop: '1em' }}>

            <div>
              <h2>
                <Link to={{ pathname: "/post/" + post.id }}>{post.title}</Link>
              </h2>
            </div>
            <div>
              <span>Posted by {post.author}</span>
              <span style={{ paddingLeft: '0.5em' }}>{fn.getDateFormat(post.timestamp)}</span>
            </div>
            <div>
              <div>
                {post.voteScore + this.state.likes}<span style={{ paddingLeft: '0.5em' }}>Votes</span>
              </div>

              <Icon link name='thumbs up outline' onClick={() => this.upVote(post.id)}></Icon>
              <Icon link name='thumbs down outline' onClick={() => this.downVote(post.id)}></Icon>
              <Icon link name='delete' onClick={() => this.delete(post.id)}></Icon>

            </div>

          </div>)

        }

      </Container>
    )
  }

}

export default ViewPost