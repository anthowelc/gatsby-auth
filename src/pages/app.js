import React from 'react'
import { Router } from '@reach/router'
import PrivateRoute from '../components/PrivateRoute'
import Layout from '../components/Layout'
import Profile from '../components/profile'
import Login from '../components/login'

const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path='/app/profile' component={Profile} />
      <Login path='/app/login' />
    </Router>
  </Layout>
)

export default App
