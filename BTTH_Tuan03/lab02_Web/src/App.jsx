
import  { useState } from "react";
import TabImg from './components/TabImg';

import './App.css'

function App() {
  const [showModal, setShowModal] = useState(true);
  return (
    <>
      <div>
        {showModal && <TabImg onClose={() => setShowModal(false)} />}
      </div>

    </>
  )
}

export default App
