import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ViewComment from './ViewComment'
import Commands from './Commands'
import { Icon } from 'semantic-ui-react'
import * as fn from '../utils/fn'
import { connect } from 'react-redux'
import { getPost } from '../actions/PostActions'
import NewComment from '../components/NewComment'
import ErrorNotFound from './ErrorNotFound';


class PostDetail extends Component {


  componentDidMount() {

    const postId = this.props.postId

    this.props.dispatch(getPost(postId))

    //this.props.dispatch(getComments(postId))

  }



  render() {

    const { post } = this.props
    
    const postDeleted = (Object.keys(post.data).length === 0 && post.data.constructor === Object) || post.deleted

    return (

      post ? (

        postDeleted ? (<ErrorNotFound/>): (

          <div key={post.data.id}>

          <div style={{ paddingBottom: '2em' }}>

            <div>
              {post.data.title}
            </div>

            <div>
              <span>Posted by {post.data.author} in {fn.getDateFormat(post.data.timestamp)}</span>
            </div>

            <div>
              {post.data.body}
            </div>

            <div>
              <div>
                {post.data.voteScore}<span style={{ paddingLeft: '0.5em' }}>Votes</span>
              </div>

              <Commands postId={post.data.id} redirectTo={"/"} />

            </div>
          </div>

          <div>

            {

              <div>
                <div>
                  <span>Comments</span>
                </div>

                {
                  post.comments.map((comment) => (
                    <div key={comment.id}>
                      <ViewComment comment={comment} />
                    </div>
                  ))
                }

                <NewComment postId={post.data.id} />

              </div>
            }

          </div>

        </div>          

        )


      ) : (<div>Aguarde...</div>)
    )

  }

}

function mapStateToProps({ posts }) {

  const { post } = posts

  console.log(post)

  return { post }

}


export default connect(mapStateToProps)(PostDetail)
