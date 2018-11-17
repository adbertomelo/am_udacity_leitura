import React, { Component } from 'react'
import * as API from '../utils/api'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadPosts, OrderBy } from '../actions'
import { VOTE_SCORE, DATE_CREATED } from '../utils/constants'
import ViewPost from './ViewPosts';

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

  componentDidMount(){
    
    API.fetchPostsByCategory(this.props.category).then((results) => {

      this.props.loadPosts({posts: results})

    }).catch(error => {

      console.log(error);

    })

  }

  render() {

    const {posts, selectedCategory, order} = this.props

    let filteredPosts = posts

    if (selectedCategory !== "all")
    {
      filteredPosts = posts.filter(x=>x.category===selectedCategory)
    }

    let sortedPosts = this.orderBy(filteredPosts, order)

    return (
      <div>
         
          {

            sortedPosts.map((item) => (
            
                <ViewPost key={item.id} post={item}></ViewPost>

          ))}
        

      </div>
    )
  }

}

function mapStateToProps ({ posts, selectedCategory, order }) {
  return { posts, selectedCategory, order }
}

function mapDispatchToProps(dispatch){
  return{
    loadPosts: (posts) => dispatch(loadPosts(posts))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPosts)