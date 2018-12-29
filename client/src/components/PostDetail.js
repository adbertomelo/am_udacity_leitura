import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ViewComment from './ViewComment'
import Commands from './Commands'
import { Icon } from 'semantic-ui-react'
import * as fn from '../utils/fn'
import { connect } from 'react-redux'
import { getPost } from '../actions'

class PostDetail extends Component {

  componentDidMount() {

    this.props.dispatch(getPost(this.props.postId))

  }

  render() {

    const { post } = this.props

    return (
      post ? (

        <div key={post.id}>
          <div style={{ paddingBottom: '2em' }}>
          
            <div className="post-title">
              {post.title}
            </div>

            <div className="post-author">
              <span>Posted by {post.author} in {fn.getDateFormat(post.timestamp)}</span>
            </div>

            <div className="post-body">
              {post.body}
            </div>
            <div>
              <div>
                {post.voteScore}<span style={{ paddingLeft: '0.5em' }}>Votes</span>
              </div>

              <Commands postId={post.id} />

              <Link to={{ pathname: `/editpost/${post.id}` }}>
                <Icon link name='edit'></Icon>
              </Link>

            </div>
          </div>

          <div>

            {/* <div>
            <div>
              <span style={{ paddingRight: '0.5em' }}>COMMENTS</span>
              <Link to={{ pathname: "/newcomment/" + post.id }}>
                <Icon name='add'></Icon>
              </Link>
            </div>


            {
              comments.length > 0 && (
                comments.map((comment) => (
                  <ViewComment key={comment.id} comment={comment} />
                ))
              )
            }


          </div> */}



          </div>

        </div>


      ) : (<div>Aguarde...</div>)
    )

  }

}

function mapStateToProps({ post }) {

  return { post }

}


export default connect(mapStateToProps)(PostDetail)
