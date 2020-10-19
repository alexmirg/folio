import React from 'react'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GlobalStyle from './GlobalStyles'

import { Header, Navbar } from './components'

function App() {
  return (
    <Router>
    <div className="App">
      <GlobalStyle />
      <Header />
      <Navbar />
    </div>
    </Router>
  );
}

export default App
