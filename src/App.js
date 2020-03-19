import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './Routes/Routes'

function App() {

  return (
    <div className="bg-white w-screen h-screen">
    <Router>
      <Routes/>
    </Router>
    </div>
  );
}

export default App;
