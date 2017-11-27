import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Header from './components/header/header.js'

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header/>
      </div>
    )
  }
}

ReactDOM.render((
  <BrowserRouter>
    <App/>
  </BrowserRouter>
), document.getElementById('root'))