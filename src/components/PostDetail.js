import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { fetchPostById, fetchComments, votePost } from '../utils/api'
import ViewComment from './ViewComment'
import { Icon } from 'semantic-ui-react'
import * as fn from '../utils/fn'

class PostDetail extends Component {

  state = {
    post: {},
    comments: [],
    likes: 0
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

  componentDidMount() {

    const postId = this.props.id

    fetchPostById(postId).then((result) => {

      this.setState({ post: result })

      fetchComments(postId).then((results) => {
        this.setState({ comments: results })
        console.log({ comments: results })
      }).catch(error => {
        console.log(error)
      })

    }).catch(error => {

      console.log(error);

    })

  }

  render() {

    const { post, comments, likes } = this.state

    return (

      <div key={post.id}>
        <div style={{paddingBottom: '2em'}}>
          <div>
            <h2>
              <Link to={{ pathname: "/post/" + post.id }}>{post.title}</Link>
            </h2>
          </div>
          <div style={{fontSize:'9px'}}>
            <span>Posted by {post.author}</span>
            <span style={{ paddingLeft: '0.5em' }}>{fn.getDateFormat(post.timestamp)}</span>
          </div>
          <div style={{ fontSize: '18px' }}>
            {post.body}
          </div>
          <div>
            <div>
              {post.voteScore + this.state.likes}<span style={{ paddingLeft: '0.5em' }}>Votes</span>
            </div>

            <Icon link name='thumbs up outline' onClick={() => this.upVote(post.id)}></Icon>
            <Icon link name='thumbs down outline' onClick={() => this.downVote(post.id)}></Icon>
            <Icon link name='delete' onClick={() => this.delete(post.id)}></Icon>
            <Link to={{ pathname: "/editpost/" + post.id }}>
              <Icon link name='edit'></Icon>
            </Link>

          </div>
        </div>

        <div>

          <div>
            <div>
              <span style={{paddingRight:'0.5em'}}>COMMENTS</span>              
              <Link to={{ pathname: "/newcomment/" + post.id }}>
                <Icon  name='add'></Icon>
              </Link>
            </div>


            {
              comments.length > 0 && (
                comments.map((comment) => (
                  <ViewComment key={comment.id} comment={comment} />
                ))
              )
            }


          </div>



        </div>

      </div>

    )

  }

}

export default PostDetail