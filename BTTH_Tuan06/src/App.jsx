import React from 'react'
import Header from './components/Header'
import Menu from './components/Menu'
import Footer from './components/Footer'
import './App.css'
function App() {


  return (
    <>
      <div>
        <Header />
        <Menu />
        <div className="bottom">
        <Footer />
        </div>
        
      </div>


    </>
  )
}

export default App
