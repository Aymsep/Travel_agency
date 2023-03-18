import React from 'react'
import './Flag.css'
import canada from '../../assets/canada.png'

const Flag = ({imagePath}) => {
  return (
    <div className="flag-img">
    <img src={canada} alt="" />
    </div>
  )
}

export default Flag