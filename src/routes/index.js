import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from './home/Home'
import Login from './login/Login'
import Product from './product/Product'
import Create from './create/Create'

const Routes = () => (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/product" component={Product}/>
        <Route path="/create" component={Create}/>
      </Switch>
    </Router>
)

export default Routes
