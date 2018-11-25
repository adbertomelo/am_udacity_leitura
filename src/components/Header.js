import React, {Component} from 'react';
import { Menu, Container } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { filterPosts, orderBy } from '../actions';
import { VOTE_SCORE, DATE_CREATED } from '../utils/constants'
import Modal from 'react-modal'
import NewPost from './NewPost';

class Header extends Component {

  state = {
    newPostModalOpen: false
  }

  openNewPostModal = () => {
    this.setState(() => ({
      newPostModalOpen: true
    }))
  }

  closeNewPostModal = () => {
    this.setState(() => ({
      newPostModalOpen: false
    }))
  }

  render()
  {

    return (

      <div>

      <Menu fixed='top'>
        <Container>
          <Menu.Item  header>
            <a href="/">Projeto Leitura</a>
          </Menu.Item>

          <Menu.Item>
            <select onChange={
              (event) => {
                this.props.filterPosts({category:event.target.value})
                }}>
                <option value="all">All</option>
                {

                    this.props.categories.map((c) => (

                      <option key={c.name} value={c.name}>{c.name}</option>

                    ))  
                }

            </select>
          </Menu.Item>
          
          <Menu.Item>
            <span style={{paddingRight:'1em'}}>Order by</span>
            <select onChange={
              (event) => {
                this.props.orderBy({order:event.target.value})
                }} >
                <option value={VOTE_SCORE}>Vote Score</option>
                <option value={DATE_CREATED}>Date</option>
            </select>
          </Menu.Item>

          <Menu.Item>
                <a href="#" onClick={this.openNewPostModal}>New Post</a>
          </Menu.Item>

        </Container>

      </Menu>
  
      <Modal
        className='modal'
        overlayClassName='overlay'
        isOpen={this.state.newPostModalOpen}
        onRequestClose={this.closeNewPostModal}
        contentLabel='Modal'>
        <div style={{textAlign:"right"}}>
          <a href="#" onClick={this.closeNewPostModal}>Close</a>
        </div>
        <NewPost/>
      </Modal>

      </div>
      )
  

  }
  
}

function mapStateToProps ({ selectedCategory }) {
  return { selectedCategory }
}

function mapDispatchToProps(dispatch){
  return{
    filterPosts: (category) => dispatch(filterPosts(category)),
    orderBy: (order) => dispatch(orderBy(order))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)