import React, { Component } from 'react'
//import { connect } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import * as API from '../utils/api'
import {Container, Modal, Button, Image} from 'semantic-ui-react'

import Header from './Header'
import ListPosts from './ListPosts'
import PostsDetail from './PostDetail';
import NewPost from './NewPost';
import EditPost from './EditPost';


class App extends Component {

  state = {
    categories: []
  }

  constructor(props){
    super(props)
    this.state = { categories: []}
  }

  componentDidMount(){

   API.fetchCategories().then((results) => {
      
      this.setState({categories: results.categories})

    }).catch(error => {
      console.log(error);
    })

  }

  render() {
    
    const { categories } = this.state

    return (
      <BrowserRouter>
        <div>

          <Header categories={categories}/>
          
          <Container style={{marginTop: '7em'}}>

            <Route path="/"  exact render={() => (
              <div>
                <ListPosts category=""/>
              </div>
            )}/>

            <Route path="/:category" exact render={({ match }) => (
              <div>                
                <ListPosts category={ match.params.category }/>                
              </div>
            )}/>

            <Route path="/post/:id" exact render={({ match }) => (
              <div>                
                <PostsDetail id={ match.params.id }/>                
              </div>
            )}/>

            <Route path="/newpost" exact render={({ match }) => (
              <div>                
                <NewPost/>                
              </div>
            )}/>

            <Route path="/editpost/:id" exact render={({ match }) => (
              <div>                
                <EditPost/>                
              </div>
            )}/>

          </Container>          


        </div>      
      </BrowserRouter>
    );
  }
}

export default App
