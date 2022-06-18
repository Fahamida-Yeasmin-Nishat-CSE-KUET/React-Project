import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import CreateUser from './components/CreateUser'
import Users from './components/Users'

function App() {

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/create' element={<CreateUser/>}/>
      </Routes>
    </Router>
    </>
    
  )
}

export default App
