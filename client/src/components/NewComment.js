import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'
import { createComment  } from '../actions/CommentsActions'

class NewComment extends Component{
  
  constructor(props) {
    super(props)
    this.state = {comment:{ author:'autor teste', body:'blá blá blá'}}
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = (event) => {
    
    event.preventDefault()
    
    let comment = this.state.comment

    comment.parentId = this.props.postId

    this.props.createComment(comment)

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
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <input type="text" name="author" onChange={this.handleInputChange} value={comment.author} placeholder="Author" />
          </Form.Field>
          <Form.Field>
            <input type="text" name="body" onChange={this.handleInputChange} value={comment.body} placeholder="Comment"/>
          </Form.Field>
          <Button type='submit'>Add Comment</Button>
        </Form>
      </div>
    )
  }

}

function mapDispatchToProps(dispatch){
  return{
    createComment: (comment) => dispatch(createComment(comment))
  }
}

export default connect(null, mapDispatchToProps)(NewComment)
