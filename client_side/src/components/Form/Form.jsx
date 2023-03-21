import { useState } from "react"
import api,{add_product,get_product} from "../../Api/api"





export default function Form() {
    const [dataForm, setdataForm] = useState({})
    const formChange = e =>{
        setdataForm({...dataForm,[e.target.name]:e.target.value})
    }
     function send(e){
        e.preventDefault()
        get_product().then(response=>{
            setdataForm({})
            console.log(response.data)
        }).catch(err=>{
            console.log('product not added')
        })

      }
    return (
        <>
        <form onSubmit={send} >
        {/* Title */}
        <label htmlFor="title">product title</label><br />
        <input type="text" id="title"  onChange={formChange}  name="title" placeholder="Product Title" required /><br />

        {/* Description */}
        <label htmlFor="description">product description</label><br />
        <input type="text" id="description" onChange={formChange}  name="description" placeholder="Product Description" required /><br />

        {/* Price */}
        <label htmlFor="price">product price</label><br />
        <input type="number" id="price" onChange={formChange}  name="price" placeholder="Product Price" required /><br />

        {/* Button */}
        <button type="submit"  >Submit Product</button>
      </form>
        </>
    )
}