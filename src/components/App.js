import React, { Component } from 'react'
//import { connect } from 'react-redux'
import * as API from '../utils/api'
import { loadCategories } from '../actions'

import Header from './Header'
import ListPosts from './ListPosts'

class App extends Component {

  state = {
    categories: [],
    posts: []
  }

  constructor(props){
    super(props)
    this.state = { categories: [], posts: []}
  }

  componentDidMount(){

    const { store } = this.props

    store.subscribe(() => {
        this.setState(() => ({ categories: store.getState().categories })
        )
      }
    )

    API.fetchCategories().then((results) => {
      
      store.dispatch( loadCategories({categories: results.categories}) )

    }).catch(error => {
      console.log(error);
    })

    this.loadPosts("")

  }

  loadPosts = (categorie) => {

    API.fetchPostsByCategorie(categorie).then((results) => {
      
      this.setState({ posts: results})

    }).catch(error => {
      console.log(error);
    })

  }

  render() {
    
    const { categories, posts } = this.state

    return (
      <div>
        <Header categories={categories} onSelect={this.loadPosts}/>
        <ListPosts posts={posts}/>
      </div>
    );
  }
}

export default App
