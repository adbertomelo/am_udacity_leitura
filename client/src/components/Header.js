import React, { Component } from 'react';
import { Menu, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Header extends Component {

  render() {

    const categories = this.props.categories

    console.log(categories)
    
    return (

      <div>

        <Menu fixed='top'>

          <Menu.Item header>
            <a href="/">Projeto Leitura</a>
          </Menu.Item>

          {
            categories.map((c, key) => (
              <Menu.Item key={key}>
                <Link to={`/${c.name}`}>{c.name}</Link>
              </Menu.Item>
            ))
            
          }

          <Menu.Item>
            <Link to="/newpost">New Post</Link>
          </Menu.Item>


        </Menu>



      </div>
    )


  }

}


export default Header