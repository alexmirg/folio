import React from 'react'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GlobalStyle from './theme/GlobalStyles'
import { Reset as ResetStyle } from 'styled-reset'

import { 
  Header, 
  Navbar, 
  Portfolio, 
  Footer, 
  Sponsors,
  Testimonial 
} from './components'

function App() {
  return (
    <Router>
    <div className="App">
      <ResetStyle />
      <GlobalStyle />
      <Header />
      <Navbar />
      <Portfolio />
      <Testimonial />
      <Sponsors />
      <Footer />
    </div>
    </Router>
  );
}

export default App
