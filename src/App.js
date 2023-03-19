import React from 'react'
import Header from './Container/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Discover from './Container/Discover/Discover'
import News from './Container/News/News'

const App = () => {
  return (
    <div >
      <Navbar/>
      <Header/>
      <Discover/>
      <News/>
    </div>
  )
}

export default App