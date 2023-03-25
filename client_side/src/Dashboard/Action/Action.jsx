import './Action.scss'
import {delete_product} from '../../Api/api'



export default function Action({dlt,element}){
    console.log()
    const handledelete = id => {
        // delete_product(id).then((response)=>{
        //     console.log(response.data)
        // })
        console.log(element.current)
    }







    return (
        <div className="app__action">
            <span onClick={() => handledelete(dlt)}  className="span" >Delete</span>
            <span className="span" >Edit</span>
            <span className="span" >csv</span>
        </div>
    )
}