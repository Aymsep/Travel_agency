import React from 'react'
import Gallery_im from '../../components/Gallery_image/Gallery_im'
import './Gallery.css'

const Gallery = () => {
  return (
    <div className="app__gallery">
        <div className="side1">
            <Gallery_im/>
            <Gallery_im width={200} height={300} />
        </div>
        <div className="side2">
            <h1>Life is short and <br /> the world is wide!</h1>
            <p>From street closures to event specific traffic control learn about how out two eay data exchange helps keep cities informed and traffic flowing</p>
        </div>
        <div className="side3">
            <Gallery_im width={250} height={350} />
            <Gallery_im width={150} height={100} />
        </div>
    </div>
  )
}

export default Gallery