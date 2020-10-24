import React from 'react'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GlobalStyle from './GlobalStyles'

import { Header, Navbar, Portfolio } from './components'

function App() {
  return (
    <Router>
    <div className="App">
      <GlobalStyle />
      <Header />
      <Navbar />
      <Portfolio />
    </div>
    </Router>
  );
}

export default App
