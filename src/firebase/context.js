import React, { createContext } from 'react'

import firebase from './firebase'
import useAuth from '../hooks/useAuth'

const FirebaseContext = createContext(null)

// Create to wrap app in gatsby-browser.
const FirebaseProvider = ({ children }) => {
  const user = useAuth()
  return (
    <FirebaseContext.Provider value={{ user, firebase }}>
      {children}
    </FirebaseContext.Provider>
  )
}

export { FirebaseProvider }

export default FirebaseContext
