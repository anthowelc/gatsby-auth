import React, { useContext } from 'react'

import { FirebaseContext } from '../firebase'

const Profile = () => {
  const {
    user: { displayName, email }
  } = useContext(FirebaseContext)

  return (
    <>
      <h1>Your profile</h1>
      <ul>
        <li>Name: {displayName}</li>
        <li>E-mail: {email}</li>
      </ul>
    </>
  )
}

export default Profile
