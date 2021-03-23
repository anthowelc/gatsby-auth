import React, { useContext } from 'react'
import { navigate } from '@reach/router'

import { FirebaseContext } from '../firebase'

const Login = () => {
  const { user, firebase } = useContext(FirebaseContext)

  if (user) {
    navigate(`/app/profile`)
  }

  return (
    <>
      <h1>Login</h1>
      <button onClick={() => firebase.login()} type='button'>
        Google Login
      </button>
    </>
  )
}

export default Login
