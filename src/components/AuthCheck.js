import { useContext } from 'react'
import { navigate } from 'gatsby'
import { FirebaseContext } from '../firebase'

const AuthCheck = ({ fallback = null, children }) => {
  const { user } = useContext(FirebaseContext)

  if (!user && fallback === 'toLogin') {
    navigate('/app/login')
    return null
  }

  return user ? children : fallback
}

export default AuthCheck
