import React, { Component } from "react"
import "./App.css"
import MovieSearch from "./pages/movie-search"
import About from "./pages/about"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App-header">
          <nav className="sans-serif roboto pt2 f3 fw4 mb4">
            <span className="f1">Movie Search</span>
            <ul className="dt fr-ns v-mid pointer">
              <li className=" dtc fr tc pt1 ph3">
                <Link
                  className="v-mid light-gray underline link hover-orange dim"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className=" dtc fr tc pt1 ph3">
                <Link
                  className="v-mid light-gray underline link hover-orange dim"
                  to="/about/"
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>
          <Route exact path="/" component={MovieSearch} />
          <Route exact path="/about" component={About} />
        </div>
      </Router>
    )
  }
}

export default App
