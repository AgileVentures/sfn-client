import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

// CSS
import '../main.scss'

// Components
import Home from '../containers/Home/Home'
import About from '../containers/About/About'
import Causes from '../containers/Causes/Causes'
import Cause from '../containers/Cause/Cause'
import Artists from '../containers/Artists/Artists'
import Artist from '../containers/Artist/Artist'
import Performances from '../containers/Performances/Performances'
import Performance from '../containers/Performance/Performance'
import Contact from '../containers/Contact/Contact'
import Header from './Header/Header'
import Footer from './Footer/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <main className="main-container grid">
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/causes" exact component={Causes} />
          <Route path="/causes/:id" component={Cause} />
          <Route path="/artists" exact component={Artists} />
          <Route path="/artists/:id" component={Artist} />
          <Route path="/performances" exact component={Performances} />
          <Route path="/performances/:id" component={Performance} />
          <Route path="/contact" component={Contact} />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
