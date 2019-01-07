
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

import { getAllPosts } from '../actions/PostActions'
import { getAllCategories } from '../actions/CategoriesActions'

import Header from './Header'
import ListPosts from './ListPosts'
import PostDetail from './PostDetail'
import NewPost from './NewPost'
import EditPost from './EditPost'
import NewComment from './NewComment'
import EditComment from './EditComment'


class App extends Component {

  componentDidMount() {
    this.props.getAllCategories()
    this.props.getAllPosts()
  }

  render() {

    return (
      <BrowserRouter>
        <div>

          <Container style={{ marginTop: '7em' }}>

            <Header categories={this.props.categories}></Header>

            <Route path="/" exact render={() => (
              <ListPosts />
            )} />

            <Route path="/:category" exact render={({ match }) => (
              <ListPosts category={match.params.category} />
            )} />

            <Route path="/:category/:post_id" exact render={({ match }) => (
              <PostDetail postId={match.params.post_id} />
            )} />

            <Route path="/newpost" exact render={() => (
              <NewPost />
            )} />

            <Route path="/post/edit/:post_id" exact render={({ match }) => (
              <EditPost postId={match.params.post_id} initialPost={this.props.post} />
            )} />

            <Route path="/newcomment/:id" exact render={({ match }) => (
              <NewComment postId={match.params.id} />
            )} />
            <Route path="/comment/:id" exact render={({ match }) => (
              <EditComment id={match.params.id} />
            )} />

          </Container>
        </div>
      </BrowserRouter>

    );
  }
}

function mapStateToProps({ categories, posts }) {
  return { categories: categories.data, post: posts.post }
}

function mapDispatchToProps(dispatch) {
  return {
    getAllPosts: () => dispatch(getAllPosts()),
    getAllCategories: () => dispatch(getAllCategories())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
