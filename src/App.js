import React from 'react'
import NewsFeed from './containers/NewsFeed'
import Profile from './containers/Profile'
import Admin from './containers/Admin'
import NewsItem from "./containers/NewsItem"
import Navbar from './components/Navbar/Navbar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Switch, Route } from 'react-router-dom'
import './App.css'

const App = () => (
  <main>
    <MuiThemeProvider>
      <Navbar />
    </MuiThemeProvider>
    <Switch>
      <Route exact path='/' component={NewsFeed} />
      <Route path='/profile' component={Profile} />
      <Route path='/admin' component={Admin} />
      <Route path="/:id" component={NewsItem} />
    </Switch>
  </main>
)
export default App;
