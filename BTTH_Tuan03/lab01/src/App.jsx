// import { useState } from 'react'

import './App.css'
import Name from './components/Name';
import Calculator from './components/Calculator';
import SumCalculator from './components/SumCalcutor';
import TodoList from './components/TodoList';
import TabContent from './components/TabContent';
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
      <div>--------------------------------------</div>
      <div className="App">
        <SumCalculator />
      </div>
      <div>--------------------------------------</div>
      <div className="App">
        <TodoList />
      </div>
      <div>--------------------------------------</div>
      <div className="App">
        <TabContent />
      </div>

    </>

  )
}

export default App
