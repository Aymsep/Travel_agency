import React from 'react'
import Home from './pages/Home/Home'
import { BrowserRouter as Router, Routes,Route, BrowserRouter } from 'react-router-dom'
import Contact from './pages/Contact/Contact'
import Discover from './pages/Discover/Discover'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Admin from './Dashboard/Admin'
import './App.scss'

const App = () => {
  return (
    <BrowserRouter >
          <Navbar/>
                <Routes>
                  <Route index element={<Home/>}/>
                  <Route path='contact' element={<Contact/>}/>
                  <Route path='discover' element={<Discover/>}/>
                  <Route path='admin' element={<Admin/>}/>
                </Routes>
          {/* <Footer/> */}
    </BrowserRouter>
  )
}

export default App