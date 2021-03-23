import React, { useContext } from 'react'

import { FirebaseContext } from '../firebase'

const Profile = () => {
  const { user } = useContext(FirebaseContext)

  return (
    <>
      <h1>Your profile</h1>
      <ul>
        <li>Name: {user.displayName}</li>
        <li>E-mail: {user.email}</li>
      </ul>
    </>
  )
}

export default Profile
