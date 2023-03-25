import React from 'react'
import ReactDOM from 'react-dom'
import { Routes, Route } from "react-router-dom";
import Home from './views/home'
import Contact from './views/contact'
import About from './views/about'
const App = () => {
  return (
    
    <Routes>
      <div>
        <Route component={Home} exact path="/" />
        <Route component={Contact} exact path="/contact" />
        <Route component={About} exact path="/about" />
      </div>
    </Routes>
  )
}

export default App;