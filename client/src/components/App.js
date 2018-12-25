import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import {Container} from 'semantic-ui-react'

import {getAllPosts, getAllCategories} from '../actions'

import Header from './Header'
import ListPosts from './ListPosts'
import PostDetail from './PostDetail'
import NewPost from './NewPost'
import EditPost from './EditPost'
import NewComment from './NewComment'
import EditComment from './EditComment'

class App extends Component {


  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.getAllCategories()
    this.props.getAllPosts()
  }

  render() {
    

    return (
      <BrowserRouter>
        <div>          
          
          <Container style={{marginTop: '7em'}}>

            <Header categories={this.props.categories}></Header>

            <Route path="/"  exact render={() => (
              <div>
                <ListPosts posts={this.props.posts}/>
              </div>
            )}/>

            <Route path="/:category"  exact render={({ match }) => (
              <div>                
                <ListPosts posts={this.props.posts} category={match.params.category}/>
              </div>
            )}/>

            <Route path="/post/:id" exact render={({ match }) => (
              <div>                
                <PostDetail id={ match.params.id }/>                
              </div>
            )}/>

            <Route path="/newpost" exact render={({ match }) => (
              <div>                
                <NewPost/>                
              </div>
            )}/>

            <Route path="/editpost/:id" exact render={({ match }) => (
              <div>                
                <EditPost id={ match.params.id }/>                
              </div>
            )}/>

            <Route path="/newcomment/:id" exact render={({ match }) => (
              <div>                
                <NewComment postId={ match.params.id }/>                
              </div>
            )}/>

            <Route path="/comment/:id" exact render={({ match }) => (
              <div>                
                <EditComment id={ match.params.id }/>                
              </div>
            )}/>

          </Container>          


        </div>      
      </BrowserRouter>
    );
  }
}

function mapStateToProps ({ posts, categories, selectedCategory }) {
  return { posts, categories, selectedCategory }
}

function mapDispatchToProps(dispatch){
  return{
    getAllPosts: () => dispatch(getAllPosts()),
    getAllCategories: () => dispatch(getAllCategories())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
