import React,{useEffect} from 'react'
import * as firebase from 'firebase'

import Signup from './components/Signup/Signup'

function App() {
  useEffect(()=> {
    firebase.auth().onAuthStateChanged((currentUser) => {
      if(!currentUser){
        console.log('Not Authenticated')
      }
    })
  })
  return (
    <div>
        <Signup/>
    </div>
  );
}

export default App;
