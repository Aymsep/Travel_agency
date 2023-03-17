import React from 'react'
import Button from '../Button/Button'
import './Navbar.css'

const Navbar = () => {
  return (
    <div >
        <nav className="app__navbar">

            <div className="app__navbar-logo">Travely</div>

            <ul className="app__navbar-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Discover</a></li>
                <li><a href="#">Latest</a></li>
                <li><a href="#">Contact us</a></li>
            </ul>

            <div className="app__navbar-button">
                <Button text='book now'  />
            </div>

        </nav>

    </div>
  )
}

export default Navbar