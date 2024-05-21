import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Pages/About'
import Home from './Pages/Home'
import Magazine from './Pages/Magazine'
import Ourteam from './Pages/Ourteam'

function App() {
  return (
    <>
     <div>
    <Router>
      <Routes>
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/About" element={<About />} />
          <Route path="/Magazine"element={<Magazine />} />
          <Route path="/Ourteam"element={<Ourteam />} />
          
      </Routes>
    </Router>
    </div>
    </>
  )
}

export default App
