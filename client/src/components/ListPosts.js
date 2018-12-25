import React, { Component } from 'react'
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
    
    const {posts, category} = this.props
    const filteredPosts = category ? posts.filter(x => x.category === category) : posts

    return (
      <div>
         
          {

            filteredPosts.map((item) => (
            
                <ViewPost key={item.id} post={item}></ViewPost>

          ))}
        

      </div>
    )
  }

}

export default ListPosts