import React, { useContext } from 'react'
import { navigate } from '@reach/router'
import { FirebaseContext } from '../firebase'

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const { user } = useContext(FirebaseContext)

  if (!user && location.pathname !== `/app/login`) {
    navigate(`/app/login`, { replace: true })
    return null
  }

  return <Component {...rest} />
}

export default PrivateRoute
