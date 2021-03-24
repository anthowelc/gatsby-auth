import React, { useContext } from 'react'
import { Link } from 'gatsby'

import { FirebaseContext } from '../firebase'

import Layout from '../components/Layout'
import AuthCheck from '../components/AuthCheck'

const Fallback = () => (
  <p>
    You should <Link to='/app/login'>log in</Link> to see restricted content
  </p>
)

export default function Home() {
  const { user } = useContext(FirebaseContext)

  return (
    <Layout>
      <h1>Hello {user?.displayName || 'world'}!</h1>
      <AuthCheck fallback={<Fallback />}>
        <p>
          You are logged in, so check your{' '}
          <Link to='/app/profile'>profile</Link>
        </p>
      </AuthCheck>
    </Layout>
  )
}
