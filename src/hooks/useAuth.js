import { useState, useEffect } from 'react'
import firebase from '../firebase'

const useAuth = () => {
  const [authUser, setAuthUser] = useState(null)

  useEffect(() => {
    const unsubscribe = firebase.auth.onAuthStateChanged(user => {
      if (user) {
        console.log(user)
        setAuthUser(user)
      } else {
        console.log(user)
        setAuthUser(null)
      }
    })
    return () => unsubscribe()
  }, [])

  return authUser
}

export default useAuth
