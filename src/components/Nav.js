import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <ul>
      <li><Link to='/'>HOME</Link></li>
      <li><Link to='/about'>ABOUT</Link></li>
    </ul>
  )
}