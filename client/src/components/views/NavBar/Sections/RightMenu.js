/* eslint-disable jsx-a11y/anchor-is-valid */
import {Link} from 'react-router-dom'
import React from 'react';
import { Menu } from 'antd';
import axios from 'axios';
import { USER_SERVER } from '../../../Config';
import { withRouter } from 'react-router-dom';
import { useSelector } from "react-redux";

function RightMenu(props) {

  const linkStyles = {
    padding: '-4px',
  }

    return (
      <Menu mode={props.mode}>
        <Menu.Item>
          {/* <a href="/">HOME</a> */}
          <Link style={linkStyles} to={'/'}>
            <p>HOME</p>
          </Link>
        </Menu.Item>
        <Menu.Item>
          {/* <a href="/">PRODUCTS</a> */}
          <Link style={linkStyles} to="/products">
            <p>PRODUCTS</p>
          </Link>
        </Menu.Item>
        <Menu.Item>
          {/* <a href="/contact">CONTACT US</a> */}
          <Link style={linkStyles} to="/contact">
            <p>CONTACT US</p>
          </Link>
        </Menu.Item>
      </Menu>
    )
}

export default withRouter(RightMenu);

