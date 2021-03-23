import React, { useContext } from 'react'
import { navigate } from '@reach/router'

import { FirebaseContext } from '../firebase'

const Login = () => {
  const { user, firebase } = useContext(FirebaseContext)

  if (user !== null) {
    navigate(`/app/profile`)
  }

  return (
    <>
      <h1>Login</h1>
      <button
        onClick={() => firebase.login('google')}
        type='button'
        className='login-btn'
      >
        Google Login
      </button>
    </>
  )
}

export default Login
