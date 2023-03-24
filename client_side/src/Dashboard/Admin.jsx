import React from 'react'
import Dashall from '../components/DashCard/Dashall'
import Form from '../components/Form/Form'
import './Admin.scss'


const Admin = () => {
  
  return (
    <div className='app__admin'>
      <Form />
      <Dashall/>
    </div>
  )
}

export default Admin