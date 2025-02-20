// import { useState } from 'react'

import './App.css'
import Name from './components/Name';
import Calculator from './components/Calculator';

function App() {


  return (
    <>
      <div className="App">
        <Name />

      </div>
      <div>--------------------------------------</div>
      <div className="App">
        <Calculator />
      </div>

    </>

  )
}

export default App
