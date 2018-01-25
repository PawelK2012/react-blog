import React, { Component } from 'react'
import NewsFeed from './containers/NewsFeed'
import Navbar from './components/Navbar/Navbar'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <NewsFeed></NewsFeed>
      </div>

    )
  }
}

export default App;
