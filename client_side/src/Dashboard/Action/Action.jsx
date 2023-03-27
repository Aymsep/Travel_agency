import './Action.scss'
import {delete_product} from '../../Api/api'
import { useStateContext } from '../../Context/StateContext'


export default function Action({dlt,element}){
const {removeproduct} = useStateContext()
    







    return (
        <div className="app__action">
            <span onClick={removeproduct}  className="span" >Delete</span>
            <span className="span" >Edit</span>
            <span className="span" >csv</span>
        </div>
    )
}