import React from 'react'
import NewsFeed from './containers/NewsFeed'
import Profile from './containers/Profile'
import Admin from './containers/Admin'
import { BrowserRouter as Router, Route, hashHistory, Switch } from 'react-router-dom'


const createRoutes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={NewsFeed} />
                <Route path="profile" component={Profile}/>
                <Route path="admin" component={Admin} />
            </Switch>
        </Router>
    )
}

const Routes = createRoutes()

export default Routes