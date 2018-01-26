import React from 'react'
import NewsFeed from './containers/NewsFeed'
import Profile from './containers/Profile'
import Admin from './containers/Admin'
import Navbar from './components/Navbar/Navbar'


import { Switch, Route } from 'react-router-dom'

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
    <Navbar></Navbar>
    <Switch>
      <Route exact path='/' component={NewsFeed}/>
      <Route path='/profile' component={Profile}/>
      <Route path='/admin' component={Admin}/>
    </Switch>
  </main>
)

export default App;
