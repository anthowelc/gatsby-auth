import app from 'firebase/app'
import 'firebase/auth'
import firebaseConfig from './config'

// Firebase APIS
class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig)
    this.auth = app.auth()
    this.googleProvider = new app.auth.GoogleAuthProvider()
  }

  login = async () => {
    await this.auth.signInWithPopup(this.googleProvider)
  }

  logout = async () => {
    await this.auth.signOut()
  }
}

const firebase = new Firebase()
export default firebase
