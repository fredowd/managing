import React from 'react';
import {Link} from 'react-router-dom';

function Header(){
  return(
    <header style={headerStyle}>
      <h1>Todo List</h1>
      <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
    </header>
  )
}

const headerStyle = {
      background: '#2f4f4f',
      color: '#fff',
      padding: '10px',
      textAlign: 'center'
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  margin: '0 5px'
}

export default Header;
