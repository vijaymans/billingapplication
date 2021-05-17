import {React,useEffect,useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import formActionsProductpost from '../actions/formActionsProductspost'
import formActionsProducts from '../actions/formActionsProducts'
import ProductsCard from './productscard'
import Productstable from './productstable'
import swal from 'sweetalert'

const Products =() =>
{
    const [name , setName] = useState('')
    const [price,setPrice] = useState(0)

    const dispatch = useDispatch()

    useEffect( () =>
    {
        dispatch(formActionsProducts())
    },[])


    const state = useSelector( (state) =>
    {
        return state.Products
    })
   

    const handleChange =(e) =>
    {
        const inp = e.target.name
        if(inp === "username")
        {
            setName(e.target.value)
        } 
        else
        {
            setPrice(e.target.value)
        }
    }

    const handleClick =(e) =>
    {
        e.preventDefault()

        const formData = {
            name : name ,
            price : Number(price)
        }
        

       if(formData.name ==="" || formData.price === 0)
        {
            swal('Both fields are mandatory' , { icon : 'warning'})
        }
        else
        {
            dispatch(formActionsProductpost(formData))
            setName("")
            setPrice("")
        }
         
    }

    return ( <div>
             <br/>
             <form className ="col-md-6" >
                    <h2 >ADD PRODUCTS</h2> <br/>
                          
                    <label>NAME</label>
                    <input type="text" name ="username" onChange ={handleChange} value={name} className="form-control"   placeholder="Enter Name"/><br/>
                    
                    <label>PRICE</label>
                    <input type="number" name ="number" onChange ={handleChange} value ={price} className="form-control"  aria-describedby="emailHelp" placeholder="Enter Price"/><br/>
                       
                    <button type="submit" onClick ={handleClick} className="btn btn-secondary">ADD</button>
            </form>
            <br/>
            <br/>
            { state.length === 0 ?  <div>
                                    <ProductsCard/>
                                     </div>
                                   : <div> 
                                     <Productstable/>
                                     </div>
            }
        
    </div>)
}

export default Products