import {Switch,Route} from 'react-router-dom'
import React from 'react'

import SignupPage from '../components/Pages/Signup/SignupPage'
import LoginPage from '../components/Pages/Login/LoginPage'
import FeedPage from '../components/Pages/Feed/FeedPage'

function Routes() {
    return (
        <Switch>
            <Route exact path="/signup" component={SignupPage}/>
            <Route exact path="/login" component={LoginPage}/>
            <Route exact path="/" component={FeedPage}/>
        </Switch>
    )
}

export default Routes
