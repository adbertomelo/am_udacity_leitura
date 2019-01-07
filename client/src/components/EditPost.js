import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getPost } from '../actions/PostActions'


class EditPost extends Component{
  constructor(props) {
    super(props)
    
    this.state = {editPost:{ id: '', 
                             title: '', 
                             author: '', 
                             body: ''}
                            }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // setRedirect = () => {
  //   this.setState({
  //     redirect: true
  //   })
  // }

  // renderRedirect = () => {
  //   if (this.state.redirect) {
  //     const link = `/post/${this.state.post.id}`
  //     return <Redirect to={link} />
  //   }
  // }

  handleSubmit = (event) => {
    event.preventDefault()
    const post = this.state.editPost
    console.log(post)
    // updatePost(post).then((result) => {

    //   this.setRedirect()

    // }).catch(error => {

    //   console.log(error);

    // })


  }

  handleInputChange(event) {

    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    const editPost = this.state.editPost

    editPost[name] = value

    this.setState({editPost: editPost})

    const {post} = this.props

  }

  componentDidMount(){

     const postId = this.props.postId
     this.setState({editPost: this.props.initialPost})
     this.props.dispatch(getPost(postId))
    
  }  

  render() {
    
    console.log("render editpost")

    const {post} = this.props
    const {editPost} = this.state

    const title = editPost.title

    return (      
      post?(
      <div>        
        <h2>Edit Post</h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Title</label>
            <input type="text" name="title" onChange={this.handleInputChange} value={title}/>
          </Form.Field>
          {/* <Form.Field>
            <label>Author</label>
            <input type="text" name="author" onChange={this.handleInputChange} value={editPost.author}/>
          </Form.Field>
          <Form.Field>
            <label>Body</label>
            <input type="text" name="body" onChange={this.handleInputChange} value={editPost.body}/>      
          </Form.Field>    
          <Button type='submit'>Confirm</Button>
          <Link to={`/post/${editPost.id}`}>Voltar</Link> */}
        </Form>        
      </div>):(<div>Aguarde...</div>)
    )
  }

}

function mapStateToProps({ posts }) {
  
   const {post} = posts
   
   return { post }

 }


export default connect(mapStateToProps)(EditPost)

