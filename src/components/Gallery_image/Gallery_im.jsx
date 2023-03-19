import React from 'react'
import './Gallery_im.css'
import { images } from '../../constant'

const Gallery_im = ({width=150, height=150}) => {
  return (
    <div className="app__image" style={{width:width?width:width,height:height?height:height}}>
        <img src={images.canada_place} alt=""  />
    </div>
  )
}

export default Gallery_im