import { useState } from "react"
import api,{add_product,get_product} from "../../Api/api"





export default function Form() {
    const [dataForm, setdataForm] = useState({})
    const formChange = e =>{
        if(e.target.type === 'file'){
            return setdataForm({...dataForm,[e.target.name]:e.target.files[0]})
        }
        setdataForm({...dataForm,[e.target.name]:e.target.value})
    }
     function send(e){
        console.log(dataForm)
        e.preventDefault()
       add_product(dataForm).then(response=>{
            console.log(response.data)
        }).catch(err=>{
            console.log('product not added')
        })

      }
    return (
        <>
        <form onSubmit={send} encType="multipart/form-data" >
        {/* Title */}
        <label htmlFor="title">product title</label><br />
        <input type="text" id="title"  onChange={formChange}  name="title" placeholder="Product Title" required /><br />

        {/* Description */}
        <label htmlFor="description">product description</label><br />
        <input type="text" id="description" onChange={formChange}  name="description" placeholder="Product Description" required /><br />

        {/* Price */}
        <label htmlFor="price">product price</label><br />
        <input type="number" id="price" onChange={formChange}  name="price" placeholder="Product Price" required /><br />

        {/* Image */}
        <label htmlFor="image">product image</label>
        <input type="file" id="image" name="image" onChange={formChange} placeholder="Product Image" required /> 

        {/* Button */}
        <button type="submit"  >Submit Product</button>
      </form>
        </>
    )
}