import React from 'react'
import Home from './pages/Home/Home'
import { BrowserRouter as Router, Routes,Route, BrowserRouter } from 'react-router-dom'
import Contact from './pages/Contact/Contact'
import Discover from './pages/Discover/Discover'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Admin from './Dashboard/Admin'
import Details from './pages/Details/Details'
import NotFound from './pages/NotFound/Notfound'
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
                  <Route path='details/:id' element={<Details/>}/>
                  <Route path='*' element={<NotFound/>}/>
                </Routes>
          {/* <Footer/> */}
    </BrowserRouter>
  )
}

export default App