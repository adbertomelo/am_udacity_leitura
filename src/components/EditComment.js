import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'
import { fetchCommentById, updateComment } from '../utils/api'

class EditComment extends Component{
  constructor(props) {
    super(props)
    this.state = {comment:{ author:'', body:''}}
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const comment = this.state.comment

    updateComment(comment).then((result) => {

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

  componentDidMount(){
    
    const commentId = this.props.id

    fetchCommentById(commentId).then((result) => {

      console.log(result)

      this.setState({comment:result})

    }).catch(error => {

      console.log(error);

    })

  }  

  render() {
    const comment = this.state.comment
    
    console.log(`comment no render:${comment}`)

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Body</label>
            <input type="text" name="body" onChange={this.handleInputChange} value={comment.body}/>
          </Form.Field>
          <Form.Field>
            <label>Author</label>
            <input type="text" name="author" onChange={this.handleInputChange} value={comment.author}/>
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
      </div>
    )
  }

}

export default EditComment