import React, { useState } from 'react'
import { navigate } from 'gatsby'
import { handleLogin, isLoggedIn } from '../services/auth'

const Login = () => {
  const [user, setUser] = useState({
    username: '',
    password: ''
  })

  const handleUpdate = event => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    handleLogin(user)
  }

  return isLoggedIn() ? (
    navigate(`/app/profile`)
  ) : (
    <>
      <h1>Log in</h1>
      <form
        method='post'
        onSubmit={event => {
          handleSubmit(event)
          navigate(`/app/profile`)
        }}
      >
        <label>
          Username
          <input type='text' name='username' onChange={handleUpdate} />
        </label>
        <label>
          Password
          <input type='password' name='password' onChange={handleUpdate} />
        </label>
        <input type='submit' value='Log In' />
      </form>
    </>
  )
}

export default Login
