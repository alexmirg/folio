import React from 'react'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GlobalStyle from './theme/GlobalStyles'
import { Reset as ResetStyle } from 'styled-reset'

import { Header, Navbar, Portfolio, Footer, Sponsors } from './components'

function App() {
  return (
    <Router>
    <div className="App">
      <ResetStyle />
      <GlobalStyle />
      <Header />
      <Navbar />
      <Portfolio />
      <Sponsors />
      <Footer />
    </div>
    </Router>
  );
}

export default App
