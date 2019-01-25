import React, { Component } from 'react'
import ViewComment from './ViewComment'
import Commands from './Commands'
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

        postDeleted ? (<ErrorNotFound />) : (

          <div key={post.data.id}>

            <div className="post-box">

              <div className="post-title">
                {post.data.title}
              </div>

              <div className="post-author">
                <span>Posted by {post.data.author} in {fn.getDateFormat(post.data.timestamp)}</span>
              </div>

              <div className="post-body">
                {post.data.body}
              </div>

              <div>
                <div>
                  


                  <span style={{ paddingRight: '0.2em' }}>{post.data.voteScore}</span><span>Votes</span><span style={{ paddingRight: '0.2em', paddingLeft: '0.5em' }}>{post.data.commentCount}</span><span>Comments</span>                  
                </div>

                <Commands postId={post.data.id} redirectTo={"/"} editButton={true} />

              </div>
            </div>

            <div>

              {

                <div>
                  <h3>Comments</h3>

                  
                    {
                      post.comments.map((comment) => (
                        <div key={comment.id}>
                          <ViewComment comment={comment} />
                        </div>
                      ))
                    }
                  
                  <div style={{paddingTop:'10px'}}>
                    <NewComment postId={post.data.id} />
                  </div>
                  

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

  return { post }

}


export default connect(mapStateToProps)(PostDetail)
