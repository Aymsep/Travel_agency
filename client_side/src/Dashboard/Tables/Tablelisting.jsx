import React,{useEffect,useState} from 'react'
import Table from 'react-bootstrap/Table';
import Header from './Header';
import './Table.scss'
import {get_product} from '../../Api/api'

const Tablelisting = () => {
  const [data, setdata] = useState()
  console.log('heehj')
  useEffect(()=>{
    get_product().then(response=>{
      setdata(response.data.response)
      console.log(data && data)
    }).catch((err)=>{
      console.log('product not found')
    })
  },[])
  const tr_data = ['hotel','price','availability','nights','reservation','action']
  return (
    <div className="app__table">
      <Header text='listing table' />
        <Table  className="table" responsive="sm">
        <thead>
          <tr>
            {
              tr_data.map((tr,i)=>(
                <th key={i} >{tr}</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
            {
              data && data.map((data,i)=>(
                <tr key={i}>
                    <td>
                        <img className='image_rounded' src={`http://localhost:3005/uploads/${data.image}`} alt=""  />
                        <span>{data.title}</span>
                    </td>
                    <td><span className='dollar'>$</span>{data.price}</td>
                    <td>Available</td>
                    <td>8</td>
                    <td>45</td>
                    <td>
                        <button>edit</button>
                    </td>
                </tr>
              ))
            }
        </tbody>
      </Table>
      
    </div>
  )
}

export default Tablelisting