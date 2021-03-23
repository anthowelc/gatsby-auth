import React from 'react'

import { FirebaseProvider } from './src/firebase'

const wrapRootElement = ({ element }) => {
  return <FirebaseProvider>{element}</FirebaseProvider>
}

export { wrapRootElement }
