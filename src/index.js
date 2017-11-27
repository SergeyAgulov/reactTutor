import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom'
import './index.css';
import Header from './components/header/header.js'
import Gamepage from './components/gamepage/gamepage.js'
import Mainmenu from './components/mainmenu/mainmenu.js'

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header/>
        <Main/>
      </div>
    )
  }
}

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/home' component={Mainmenu} />
          <Route path='/gamepage' component={Gamepage} />
        </Switch>
      </main>
    )
  }
}

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'))