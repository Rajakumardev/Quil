import React, { useEffect } from 'react'
import * as firebase from 'firebase'

import SignupPage from './components/Pages/Signup/SignupPage'

function App() {
  useEffect(() => {
    firebase.auth().onAuthStateChanged((currentUser) => {
      if (!currentUser) {
        console.log('Not Authenticated')
      }
    })
  })
  return (
    <div>
      <SignupPage />
    </div>
  );
}

export default App;
