import React,{useEffect,useState,useRef} from 'react'
import Table from 'react-bootstrap/Table';
import Header from './Header';
import './Table.scss'
import {get_product} from '../../Api/api'
import {BiDotsVertical} from 'react-icons/bi'
import Action from '../Action/Action';

const Tablelisting = () => {
  const [data, setdata] = useState()
  const [id, setid] = useState()
  const element = useRef(null)

  const handleaction = (item,element) => {
    if (id == item) {
      setid(null)
      element.current.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    } else {
      setid(item)
      element.current.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  const handleDelete = (item) => {
    console.log(item.currentTarget)
  }



  useEffect(()=>{
    get_product().then(response=>{
      setdata(response.data.response)
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
                <tr ref={element} key={i} data-id={data._id}>
                    <td>
                        <img className='image_rounded' src={`http://localhost:3005/uploads/${data.image}`} alt=""  />
                        <span>{data.title}</span>
                    </td>
                    <td style={{letterSpacing:'.9px',padding:'25px'}} ><span   className='dollar'>$</span>{data.price}</td>
                    <td>Available</td>
                    <td>8</td>
                    <td>45</td>
                    <td>
                        <BiDotsVertical  data-id={data._id}  onClick={()=>handleaction(data._id,element)} />
                        {id == data._id && <Action element={element} dlt={data._id} />}
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