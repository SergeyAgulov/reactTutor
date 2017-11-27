import React, { Component } from 'react';
import './game.css';
import Gamefield from '../../components/gamefield/gamefield.js';

export default class Game extends Component {

  constructor() {
    super()
    this.state = {
      fieldSize: [10, 10]
    };
  }

  render() {
    return (
      <div className='game'>
        <Gamefield/>
      </div>
    )
  }
}