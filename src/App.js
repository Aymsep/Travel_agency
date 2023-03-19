import React from 'react'
import Header from './Container/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Discover from './Container/Discover/Discover'
import News from './Container/News/News'
import Gallery from './Container/Gallery/Gallery'

const App = () => {
  return (
    <div >
      <Navbar/>
      <Header/>
      <Discover/>
      <News/>
      <Gallery/>
    </div>
  )
}

export default App