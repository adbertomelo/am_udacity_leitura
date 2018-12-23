import React, { Component } from 'react'
import * as API from '../utils/api'
import { connect } from 'react-redux'
import { loadPosts } from '../actions'
import { VOTE_SCORE, DATE_CREATED } from '../utils/constants'
import ViewPost from './ViewPost';

class ListPosts extends Component{


  orderBy = (data, order) => {
    
    let res = data
    
    if (order === VOTE_SCORE)
    {

       res = data.sort((a, b) => {
       
        return b.voteScore - a.voteScore;

      })

    }

    if (order === DATE_CREATED)
    {

       res = data.sort((a, b) => {
       
        return b.timestamp - a.timestamp;

      })

    }

    return res;

  }


  render() {
    
    const {posts} = this.props

    return (
      <div>
         
          {

            posts.map((item) => (
            
                <ViewPost key={item.id} post={item}></ViewPost>

          ))}
        

      </div>
    )
  }

}

export default ListPosts