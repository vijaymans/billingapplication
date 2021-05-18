import {React,useState,useEffect} from 'react'

import {useSelector ,useDispatch} from 'react-redux'
import formActionsCustomer from '../actions/formActionsCustomer'
import formActionsProducts from '../actions/formActionsProducts'
import formActionsCreateBill from '../actions/formActionsCreateBill'
import formActionsgetBill from '../actions/formActionsgetBills'

import BillTable from './BillTable'


const Bill =() =>
{
    
    const [udate ,setUDate] = useState("")
    const [ucustomer , setUCustomer] = useState("")
    const [addItem , setAddItem] = useState([{product :"" ,quantity : ""}])
    
    const dispatch = useDispatch()

    useEffect( () =>
    {
        dispatch(formActionsCustomer())
        dispatch(formActionsProducts())
        dispatch(formActionsgetBill())
        
    },[])

    const state = useSelector( (state) =>
        {
            return state
        })
    console.log('state',state)
        const handleDate =(e) =>
        {
            setUDate(e.target.value)
        }
        
        const handleCustomer =(e) =>
        {
            setUCustomer(e.target.value)
        }
   
        const handleItem = (e,i) =>
        {
            const values =[...addItem]
            values[i].product = e.target.value
            setAddItem(values)
            
        } 

        const handleQuantity =(e,i) =>
        {
            const values =[...addItem]
            if(Number(e.target.value) < 0)
            {
                values[i].quantity = 1
                setAddItem(values)
            }
            else
            {
                values[i].quantity = Number(e.target.value)
                setAddItem(values)
            }
                                
        }

        const handleRemove =(e,i) =>
        {
            e.preventDefault()
            console.log('index' ,i)
           
            const values = [...addItem]
            values.splice(i,1)
            console.log(values ,'values')
            setAddItem(values) 
        }

       const handleAddItem = (e) =>
        {
            e.preventDefault()
            setAddItem([...addItem ,{product : "" ,quantity : ""}])
            
        } 

        const generateBill =(e) =>
        {
            e.preventDefault()
        
                const formData ={
                            date : udate,
                            customer : ucustomer,
                            lineItems: addItem
                            
                            }
            console.log('formdata',formData)       
            dispatch(formActionsCreateBill(formData))          
              
        }
    
    return ( <div>
        <h2>INVOICE </h2>
        
        <form className="form-row align-items-center col-md-12">
                    <br/>

                        <div className ="col-md-6"> 
                        <label> ENTER DATE</label>
                        <input type="date" name ="date"  onChange ={handleDate}  className="form-control"  value ={udate}   placeholder="Enter Date"/><br/>
                        </div>  
                        <br/>
                   
                        <div className ="col-md-6">
                        <select className="form-select form-control"  onChange ={handleCustomer}>
                        <option value ="">SELECT CUSTOMER</option>   
                        {
                            state.Customers.map((ele) =>
                            {
                                return <option value ={ele._id}>{ele.name}</option>
                            })
                        }
                        </select>
                        </div> 
                        <br/>


                    { addItem.map( (ele ,i) =>
                            {
                                return (<div className="row">
                                            <div className ="col-md-4">
                                            <select className="form-select form-control" 
                                            onChange= { (e) =>
                                            {
                                                handleItem(e,i)
                                            }} name ="product" value ={ele.product}  aria-label=".form-select-lg example">
                                            <option value ="">SELECT PRODUCT</option>    
                                            {
                                                state.Products.map( ele =>
                                                    {
                                                        return <option value = {ele._id}>{ele.name}</option>
                                                    })
                                            }
                                            </select>
                                            </div>

                                            <div className ="col-md-4">
                                            <input type ="number" className="form-control" name ="quantity"  value ={ele.quantity} 
                                            placeholder =" ENTER QUANTITY"onChange ={ (e) =>
                                                {
                                                    handleQuantity(e,i)
                                                }} />
                                            </div> 

                                            <div className ="col-md-4">
                                            <button  className="btn btn-secondary"  onClick ={ (e) =>
                                                {
                                                    handleRemove(e,i)
                                                }}> REMOVE ITEM</button> 
                                            </div> 
                                            
                                        </div>)
                            }
                        )
                    }
                   <br/> 
                    <div className ="row">
                        <div className ="col-md-6">
                        <button  onClick ={handleAddItem}  className="btn btn-secondary">ADD MORE ITEMS</button>
                        </div>
                        <div className ="col-md-6">
                        <button  type ="submit" onClick ={generateBill}  className="btn btn-secondary">GENERATE BILL</button>
                        </div>
                    </div>
                        
                    <br/>
                    <br/>    
                    <BillTable/>          
                </form>


               
    </div>)
}

export default Bill