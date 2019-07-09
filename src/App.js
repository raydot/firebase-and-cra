import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import firebaseConfig from './firebaseConfig'

// Initialize the app using the configuration
const firebaseApp = firebase.initializeApp(firebaseConfig)

//Setup the providers and access the auth library
const firebaseAppAuth = firebaseApp.auth()
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
}


class App extends Component {
    // Firebase provides a user, error, and some signin and signout methods as props
  render() {
    const {
      user,
      signOut,
      SignInWithGoogle,

    } = this.props
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {
          user
            ? <p>Hi there {user.displayName}</p>
            : <p>Please sign in!</p>
        }
        {
          user
            ? <button onClick={signOut}>Sign Out</button>
            : <button onClick={SignInWithGoogle}>Sign in with Google</button>
        }
      </header>
    </div>
  );
  }
}

// Wrap the export of the APP component using the withFirebaseAuth HOC
// so we can access the properties provided by the withFireBaseAuth HOC in the 
// App components. 
//export default App;
export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(App)
