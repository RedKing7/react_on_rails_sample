import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.span`
  background-color: skyblue;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  a{
    text-decoration: none;
    color: white;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <h1>Tunr</h1>
      <Link to='/'>All Artists</Link>
    </Nav>
  );
}

export default Navbar;