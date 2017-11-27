import React, { Component } from 'react';
import './gamepage.css';
import Game from '../../components/game/game.js';

export default class Gamepage extends Component {
  render() {
    return (
      <div className='gamepage'>
        <Game/>
      </div>
    )
  }
}