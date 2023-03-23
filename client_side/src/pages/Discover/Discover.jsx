import React from 'react'
import { useEffect,useState } from 'react'
import api,{get_product} from '../../Api/api'
import Card from '../../components/Card/Card'
import CardChild from '../../components/Card/CardChild'


const Discover = () => {
  const [Data, setData] = useState()
  useEffect(()=>{
    get_product().then((res)=>{
      setData(res.data.response)
    }).catch(err=>{
      console.log(err.message)
    })
  },[])
  return (
    <div>
      {
        Data && Data.map((pro,i)=>(
            <Card key={i}>
              <CardChild
            place_image={`http://localhost:3005/uploads/${pro.image}`}
            plane={true}
            car={false}
            price={pro.price}
            location={pro.title}
            country={pro.description}
            adults={5}
            date="may "
            nights={5}
            flag={`http://localhost:3005/uploads/${pro.image}`}
              />
            </Card>

        ))
      }
    </div>
  )
}

export default Discover