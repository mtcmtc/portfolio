import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import logo from './logo.svg';
import './App.css';




// import createGlobalStyle helper
import { createGlobalStyle } from 'styled-components'


// Import pages
 import Home from './pages/Home'
 import Resume from './pages/Resume'
 import Projects from './pages/Projects'
 import Contact from './pages/Contact'

// Import nav component
import Nav from './components/Nav'

//Global style
const GlobalStyle = createGlobalStyle`

  html, body, #app, .wrapper {
    min-height: 100vh;
    height:100%;
  }

  html {
    box-sizing: border-box;
    font-size: 100%;
  }

  * {
    &,
    &::after,
    &::before {
      box-sizing: inherit;
    }
  }

  body {
    padding: 0;
    margin: 0;
    font: 1rem / 1.414 arial, sans-serif;
  }
`


export default class App extends Component {
  render() {
    return (
      <Router basename={"react-router-test/"}>
        <GlobalStyle />
        <Nav />
        <div className="wrapper">
          { <Route exact={true} path="/" component={Home}/> }
          { <Route path="/resume/" component={Resume}/> }
          { <Route path="/projects/" component={Projects}/> }
          { <Route path="/contact/" component={Contact}/> }
        </div>
      </Router>
    );
  }
}
