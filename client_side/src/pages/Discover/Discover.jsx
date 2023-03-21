import React from 'react'
import { useEffect } from 'react'
import api,{get_product} from '../../Api/api'


const Discover = () => {
  useEffect(()=>{
    get_product().then((res)=>{
      console.log(res.data)
    }).catch(err=>{
      console.log(err.message)
    })
  },[])
  return (
    <div>Discover</div>
  )
}

export default Discover