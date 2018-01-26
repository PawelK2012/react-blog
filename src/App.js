import React from 'react'
import ReactDOM from 'react-dom'
import NewsFeed from './containers/NewsFeed'
import Profile from './containers/Profile'
import Admin from './containers/Admin'
import Navbar from './components/Navbar/Navbar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Switch, Route } from 'react-router-dom'
import './App.css'

// class App extends Component {
//   render() {
//     return (
//       <main>
//         <Navbar></Navbar>
//         {/* <Routes/> */}
//         <Switch>
//           <Route exact path='/' component={NewsFeed} />
//           <Route path='/profile' component={Profile} />
//           <Route path='/admin' component={Admin} />
//         </Switch>
//       </main>

//     )
//   }
// }

const App = () => (
  <main>
    <MuiThemeProvider>
      <Navbar/>
    </MuiThemeProvider>
    <Switch>
      <Route exact path='/' component={NewsFeed} />
      <Route path='/profile' component={Profile} />
      <Route path='/admin' component={Admin} />
    </Switch>
  </main>
)

export default App;
