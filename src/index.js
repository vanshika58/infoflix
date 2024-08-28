import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Home from './views/home'
import Contact from './views/contact'
import About from './views/about'
import { HashRouter,BrowserRouter } from "react-router-dom";
import Documentry from './views/documentry'
import Research from './views/research';

const App = () => {
  return (
    
    <BrowserRouter>
      <div>
        <Route component={Home} exact path="/" />
        <Route component={Contact} exact path="/contact" />
        <Route component={About} exact path="/about" />
        <Route component={Documentry} exact path="/documentry" />
        <Route component={Research} exact path="/research"/>
      </div>
    </BrowserRouter>
  )
}

ReactDOM.render( 
  <App />
, document.getElementById('app'))
