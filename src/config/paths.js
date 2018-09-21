import React from 'react'
import StaticRoutes from 'react-static-routes'
import { Route, Switch, Redirect } from 'react-static'
import { DynamicRouteComponent } from '../components/pages/'

const Paths = (
  <Switch>
    <Route exact path="/dynamicroute" component={DynamicRouteComponent} />
    <StaticRoutes />
  </Switch>
)

export default Paths
