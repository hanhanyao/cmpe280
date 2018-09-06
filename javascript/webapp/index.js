import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'

render((
  <Router history={hashHistory}>
    <Route path="/" component={Home}/>
    <Route path="/repos" component={Contact}/>
    <Route path="/about" component={About}/>
  </Router>
), document.getElementById('app'))