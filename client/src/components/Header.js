import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { VOTE_SCORE, DATE_CREATED } from '../utils/constants'

import { orderBy } from '../actions/PostActions';
import { connect } from 'react-redux'

class Header extends Component {

  render() {

    const categories = this.props.categories

    return (

      <div>

        <Menu fixed='top'>

          <Menu.Item header>
            <Link to='/'>Projeto Leitura</Link>
          </Menu.Item>

          {
            categories.map((c, key) => (
              <Menu.Item key={key}>
                <Link to={`/${c.name}`}>{c.name}</Link>
              </Menu.Item>
            ))

          }

          <Menu.Item>
            <span style={{ paddingRight: '1em' }}>Order by</span>
            <select onChange={
              (event) => {
                this.props.orderBy({ order: event.target.value })
              }} >
              <option value={VOTE_SCORE}>Vote Score</option>
              <option value={DATE_CREATED}>Date</option>
            </select>
          </Menu.Item>

          <Menu.Item>
            <Link to="/newpost">New Post</Link>
          </Menu.Item>

        </Menu>

      </div>
    )


  }

}

function mapDispatchToProps(dispatch) {
  return {
    orderBy: (order) => dispatch(orderBy(order))
  }
}

export default connect(null, mapDispatchToProps)(Header)