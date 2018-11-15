import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'
import { fetchPostById, updatePost } from '../utils/api'

class EditPost extends Component{
  constructor(props) {
    super(props)
    this.state = {post:{ title:'', author:'', body:''}}
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const post = this.state.post

    updatePost(post).then((result) => {

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

    this.setState({post: post});

  }

  componentDidMount(){
    
    const postId = this.props.id

    fetchPostById(postId).then((result) => {

      this.setState({post:result})

    }).catch(error => {

      console.log(error);

    })

  }  

  render() {
    const post = this.state.post
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Title</label>
            <input type="text" name="title" onChange={this.handleInputChange} value={post.title}/>
          </Form.Field>
          <Form.Field>
            <label>Author</label>
            <input type="text" name="author" onChange={this.handleInputChange} value={post.author}/>
          </Form.Field>
          <Form.Field>
            <label>Body</label>
            <input type="text" name="body" onChange={this.handleInputChange} value={post.body}/>      
          </Form.Field>    
          <Button type='submit'>Submit</Button>
        </Form>
      </div>
    )
  }

}

export default EditPost