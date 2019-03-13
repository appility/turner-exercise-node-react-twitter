import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import 'normalize.css'
import HomeController from './controllers/Home'
import TweetsController from './controllers/Tweets'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomeController} />
          <Route path="/tweets/:screen_name" component={TweetsController} />
        </div>
      </Router>
    )
  }
}

export default App
