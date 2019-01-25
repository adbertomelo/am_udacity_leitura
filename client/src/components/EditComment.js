import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'
import { updateComment } from '../actions/CommentsActions'
import { connect } from 'react-redux'

class EditComment extends Component{
  constructor(props) {
    super(props)
    this.state = {editComment:{ author:'', body:''}}
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const comment = this.state.editComment
    
    this.props.dispatch(updateComment(comment))

    this.props.closeCommentModal()

  }

  componentDidMount()
  {
    this.setState({editComment: this.props.comment})
  }

  handleInputChange(event) {

    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    const editComment = this.state.editComment

    editComment[name] = value

    this.setState({comment: editComment});

  }

  render() {

    const {editComment} = this.state

    return (
      <div>
        
        <h2>Edit Comment</h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Author</label>
            <input type="text" name="author" onChange={this.handleInputChange} value={editComment.author}/>
          </Form.Field>
          <Form.Field>
            <label>Body</label>
            <input type="text" name="body" onChange={this.handleInputChange} value={editComment.body}/>
          </Form.Field>
          <Button type='submit'>Confirm</Button>
        </Form>
      </div>
    )
  }

}

function mapStateToProps() {
  
  return { }

}


export default connect(mapStateToProps)(EditComment)

