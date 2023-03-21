import React from 'react'
import './Button.css'


const Button = ({text,icon}) => {
  return (
    <>
    <button>{text} {icon&&icon}</button>
    </>
  )
}

export default Button