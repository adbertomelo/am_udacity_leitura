import React, { Component } from 'react'
import { connect } from 'react-redux'
import { VOTE_SCORE, DATE_CREATED } from '../utils/constants'
import { Link } from 'react-router-dom'
import * as fn from '../utils/fn'
import { Container } from 'semantic-ui-react'
import Commands from './Commands'

class ListPosts extends Component {

  orderBy = (data, order) => {

    let res = data

    if (order === VOTE_SCORE) {

      res = data.sort((a, b) => {

        return b.voteScore - a.voteScore;

      })

    }

    if (order === DATE_CREATED) {

      res = data.sort((a, b) => {

        return b.timestamp - a.timestamp;

      })

    }

    return res;

  }

  render() {

    const { category, posts, order } = this.props

    const postsOrdered = this.orderBy(posts, order)

    const filteredPosts = category ? postsOrdered.filter(x => x.category === category) : postsOrdered

    return (

      <div>

        {
          filteredPosts.map((post) => (

            <Container key={post.id}>
              {

                <div style={{ paddingTop: '1em' }}>

                  <div>
                    <h2>
                      <Link to={{ pathname: `/${post.category}/${post.id}` }}>{post.title}</Link>
                    </h2>
                  </div>
                  <div>
                    <span>Posted by <b>{post.author}</b></span>
                    <span style={{ paddingLeft: '0.5em' }}>{fn.getDateFormat(post.timestamp)}</span>
                  </div>
                  <div>
                    <div>
                      <span style={{ paddingRight: '0.2em' }}>{post.voteScore}</span><span>Votes</span><span style={{ paddingRight: '0.2em', paddingLeft:'0.5em' }}>{post.commentCount}</span><span>Comments</span>
                    </div>

                    <Commands postId={post.id} />

                  </div>

                </div>

              }

            </Container>


          ))}


      </div>
    )
  }

}


function mapStateToProps({ posts }) {

  return { posts: posts.data, order: posts.order }

}


export default connect(mapStateToProps)(ListPosts)
