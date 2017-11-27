import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './header.css';

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <nav>
          <ul>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/gamepage'>Gamepage</Link></li>
          </ul>
        </nav>
      </div>
    )}
}