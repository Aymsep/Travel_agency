import React from 'react'
import Header from './Container/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Discover from './Container/Discover/Discover'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Discover/>
    </div>
  )
}

export default App