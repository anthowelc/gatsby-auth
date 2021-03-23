import React, { useContext } from 'react'
import { navigate } from '@reach/router'
import { FirebaseContext } from '../firebase'

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const { user } = useContext(FirebaseContext)
  console.log('privateroute', user)

  if (user === null && location.pathname !== `/app/login`) {
    console.log('privaterouteNULL', user)
    navigate(`/app/login`, { replace: true })
    return null
  }
  console.log('privaterouteUSERRRR', user)

  return <Component {...rest} />
}

export default PrivateRoute
