import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'
import { createPost } from '../actions/PostActions'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class NewPost extends Component {
  constructor(props) {
    super(props)
    this.state = { post: { title: 'teste', author: 'teste', body: 'teste', category: 'react' },  redirect: false }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  getFormValidationState() {
    const {author, title, body} = this.state;
    return (author > 1 && title > 1 && body > 1);
  }

  
  handleSubmit = (event) => {

    event.preventDefault()

    const post = this.state.post

    this.props.createPost(post)

  }

  handleInputChange(event) {

    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    const post = this.state.post

    post[name] = value

    this.setState({ post: post });

  }

  render() {

    //if (this.props.redirect)
    //  return <Redirect to="/"></Redirect>

    const post = this.state.post

    return (
      <div>
       
        <h2>New Post</h2>

        <Form onSubmit={this.handleSubmit}>

          <Form.Field>
            <label>Title</label>
            <input type="text" name="title" onChange={this.handleInputChange} value={post.title} />
          </Form.Field>
          <Form.Field>
            <label>Author</label>
            <input type="text" name="author" onChange={this.handleInputChange} value={post.author} />
          </Form.Field>
          <Form.Field>
            <label>Body</label>
            <input type="text" name="body" onChange={this.handleInputChange} value={post.body} />
          </Form.Field>

          <Form.Field>
          <label>Category</label>
            <select name='category' onChange={this.handleInputChange}>
              {
                this.props.categories.map((c) => (

                  <option key={c.name} value={c.name}>{c.name}</option>

                ))
              }
            </select>
          </Form.Field>

          <Form.Field>
            <Button type='submit'>Confirm</Button>
            <Link to="/">Voltar</Link>
          </Form.Field>


        </Form>
      </div>
    )
  }

}

function mapStateToProps ({ categories, post }) {

  const redirect = post?true:false

  return { categories: categories.data, redirect }
}

function mapDispatchToProps(dispatch){
  return{
    createPost: (post) => dispatch(createPost(post))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPost)
