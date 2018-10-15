import React, { Component } from 'react'
//import { connect } from 'react-redux'
import * as API from '../utils/api'
import { loadCategories } from '../actions'

import Header from './Header'


class App extends Component {

  state = {
    categories: []
  }

  constructor(props){
    super(props)
    this.state = { categories: []}
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


  }

  render() {
    
    const { categories } = this.state

    return (
      <div>
        <Header categories={categories}/>
      </div>
    );
  }
}

export default App
