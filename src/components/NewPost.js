import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'
import { createPost, fetchCategories } from '../utils/api'

class NewPost extends Component {
  constructor(props) {
    super(props)
    this.state = { post: { title: '', author: '', body: '', category: 'react' }, categories: [] }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  getFormValidationState() {
    const {author, title, body} = this.state;
    return (author > 1 && title > 1 && body > 1);
  }

  componentDidMount() {

    fetchCategories().then((results) => {

      this.setState({ categories: results.categories })

    }).catch(error => {
      console.log(error);
    })

  }

  handleSubmit = (event) => {

    event.preventDefault()

    const post = this.state.post

    console.log(post)

    createPost(post).then((result) => {

      console.log(result)

    }).catch(error => {

      console.log(error);

    })


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
                this.state.categories.map((c) => (

                  <option key={c.name} value={c.name}>{c.name}</option>

                ))
              }
            </select>
          </Form.Field>

          <Form.Field>
            <Button type='submit'>Confirmar</Button>
          </Form.Field>


        </Form>
      </div>
    )
  }

}

export default NewPost