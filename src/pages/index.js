import React, { useContext } from 'react'
import { Link } from 'gatsby'

import { FirebaseContext } from '../firebase'

import Layout from '../components/Layout'

export default function Home() {
  const { user } = useContext(FirebaseContext)
  return (
    <Layout>
      <h1>Hello {user ? user.displayName : 'world'}!</h1>
      <p>
        {user ? (
          <>
            You are logged in, so check your{' '}
            <Link to='/app/profile'>profile</Link>
          </>
        ) : (
          <>
            You should <Link to='/app/login'>log in</Link> to see restricted
            content
          </>
        )}
      </p>
    </Layout>
  )
}
