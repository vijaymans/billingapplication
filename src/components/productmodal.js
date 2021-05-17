import {React ,useState ,useEffect} from 'react'
import {useDispatch} from 'react-redux'
import formActionsOneProduct from '../actions/formActionsOneProduct'
import formActionsProductUpdate from '../actions/formActionsProductUpdate'

const ProductModal = (props) => 
{
    const productId = props.prodId

    const [uname ,setUName] = useState('')
    const [price ,setPrice] = useState(0)
    

    const dispatch = useDispatch() 

    const updatefunction = (Data) =>
    {
        setUName(Data.name)
        setPrice(Number(Data.price))
       
    }
    

    useEffect( () =>
    {
        const Dataobj = {   productId : productId,
                            updatefunction : updatefunction
                        }
        
         dispatch(formActionsOneProduct(Dataobj))

    },[])

    const handleChange =(e) =>
    {
        const inp = e.target.name
        if( inp === "username")
        {
            setUName(e.target.value)
        }
        
        else
        {

            setPrice(Number(e.target.value))
        }

    }

    const handleClick =(e) =>
    {
        e.preventDefault()
        const formData = {
            name : uname ,
            price : price,
            productId : productId
        }
        console.log(formData)
        dispatch(formActionsProductUpdate(formData))
        props.hideModal()
    }
    
    return( <div className ="container">
               <form>
                             
                    <label>NAME</label>
                    <input type="text" name ="username"  onChange ={handleChange}  className="form-control"   value ={uname}   placeholder="Enter Name"/><br/>
                    
                    <label>PRICE</label>
                    <input type="number" name ="price"  onChange ={handleChange}  className="form-control"   value ={price}   placeholder="Enter Price"/><br/>
                    
                    
                    
                    <button type="submit"  onClick ={handleClick}  className="btn btn-secondary">SAVE</button>
                </form>
                </div>)
}

export default ProductModal