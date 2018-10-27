import React, {Component} from 'react';
import { Menu, Container } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { filterPosts, orderBy } from '../actions';
import { VOTE_SCORE, DATE_CREATED } from '../utils/constants'

class Header extends Component {

  render()
  {

    return (

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
                <Link to="/newpost">New Post</Link>
          </Menu.Item>

        </Container>

      </Menu>
  
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