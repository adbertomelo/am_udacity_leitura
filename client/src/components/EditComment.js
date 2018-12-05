import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'
import { fetchCommentById, updateComment } from '../utils/api'
import { Link, Redirect } from 'react-router-dom'

class EditComment extends Component{
  constructor(props) {
    super(props)
    this.state = {comment:{ author:'', body:''}, redirect:false}
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    
    const comment = this.state.comment

    updateComment(comment).then((result) => {

      this.setRedirect()

    }).catch(error => {

      console.log(error);

    })


  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      const link = `/post/${this.state.comment.parentId}`
      return <Redirect to={link} />
    }
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

      this.setState({comment:result})

    }).catch(error => {

      console.log(error);

    })

  }  

  render() {
    const comment = this.state.comment

    return (
      <div>
        {this.renderRedirect()}
        <h2>Edit Comment</h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Body</label>
            <input type="text" name="body" onChange={this.handleInputChange} value={comment.body}/>
          </Form.Field>
          <Form.Field>
            <label>Author</label>
            <input type="text" name="author" onChange={this.handleInputChange} value={comment.author}/>
          </Form.Field>
          <Button type='submit'>Confirm</Button>
          <Link to={`/post/${comment.parentId}`}>Voltar</Link>
        </Form>
      </div>
    )
  }

}

export default EditComment