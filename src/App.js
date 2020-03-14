import React,{useEffect} from 'react'
import * as firebase from 'firebase'

function App() {
  useEffect(()=> {
    firebase.auth().onAuthStateChanged((currentUser) => {
      if(!currentUser){
        console.log('Not Authenticated')
      }
    })
  })
  return (
    <div className="App">
        Quil
    </div>
  );
}

export default App;
