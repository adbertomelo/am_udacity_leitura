import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'
import { fetchPostById, updatePost } from '../utils/api'
import { Redirect, Link } from 'react-router-dom'

class EditPost extends Component{
  constructor(props) {
    super(props)
    this.state = {post:{ title:'', author:'', body:''}, redirect: false}
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      const link = `/post/${this.state.post.id}`
      return <Redirect to={link} />
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const post = this.state.post

    updatePost(post).then((result) => {

      this.setRedirect()

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
        {this.renderRedirect()}
        <h2>Edit Post</h2>
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
          <Button type='submit'>Confirm</Button>
          <Link to={`/post/${post.id}`}>Voltar</Link>
        </Form>
      </div>
    )
  }

}

export default EditPost