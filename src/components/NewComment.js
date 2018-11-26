import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'
import { createComment  } from '../utils/api'
import { Link } from 'react-router-dom'

class NewComment extends Component{
  
  constructor(props) {
    super(props)
    this.state = {comment:{ author:'', body:''}}
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = (event) => {
    
    event.preventDefault()
    
    let comment = this.state.comment

    comment.parentId = this.props.postId

    createComment(comment).then((result) => {

      console.log(result)

    }).catch(error => {

      console.log(error);

    })
  

  }

  handleInputChange(event) {

    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    const comment = this.state.comment

    comment[name] = value

    this.setState({comment: comment});

  }

  render() {
    const comment = this.state.comment
    return (
      <div>
        <h2>New Comment</h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Comment</label>
            <input type="text" name="body" onChange={this.handleInputChange} value={comment.body}/>
          </Form.Field>
          <Form.Field>
            <label>Author</label>
            <input type="text" name="author" onChange={this.handleInputChange} value={comment.author}/>
          </Form.Field>
          <Button type='submit'>Confirm</Button>
          <Link to={`/post/${this.props.postId}`}>Voltar</Link>
        </Form>
      </div>
    )
  }

}

export default NewComment