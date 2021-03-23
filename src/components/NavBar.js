import React, { useContext } from 'react'
import { Link } from 'gatsby'

import { FirebaseContext } from '../firebase'

export default function NavBar() {
  const { user, firebase } = useContext(FirebaseContext)

  let greetingMessage = ''
  if (user) {
    greetingMessage = `Hello ${user.displayName}`
  } else {
    greetingMessage = 'You are not logged in'
  }

  return (
    <div
      style={{
        display: 'flex',
        flex: '1',
        justifyContent: 'space-between',
        borderBottom: '1px solid #d1c1e0'
      }}
    >
      <span>{greetingMessage}</span>
      <nav>
        <Link to='/'>Home</Link>
        {` `}
        <Link to='/app/profile'>Profile</Link>
        {` `}
        {user && <button onClick={() => firebase.logout()}>Logout</button>}
      </nav>
    </div>
  )
}
