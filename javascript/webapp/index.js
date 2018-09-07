import React from 'react'
import { render } from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

import Home from './components/home/Home.jsx';
import About from './components/about/About.jsx';
import Contact from './components/contact/Contact.jsx';
import Login from './components/login/Login.jsx';

function token() {
  return localStorage.getItem('token')
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={
      props => {
        if (token()) {
          return <Component {...props} />
        } else {
          return <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        }
      }
    }
  />
);

render((
  <Router>
    <div>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <PrivateRoute path="/contact" component={Contact} />
    </div>
  </Router>
), document.getElementById('app'));




