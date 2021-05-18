import React from 'react'
import Customertable from './customertable'
import CustomerCard from './customercard'
import formActionsCustomer from '../actions/formActionsCustomer'
import formActionsCustomerpost from '../actions/formActionsCustomerpost'
import {useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
//import CustomerModal from './customermodal'
import swal from 'sweetalert'

const Customers =() =>
{
    const [name , setName] = useState('')
    const [email,setEmail] = useState('')
    const [mobile , setMobile] = useState('')

    const state = useSelector ( (state) =>
    {
        return state.Customers
    })

    console.log('customersstate' ,state)

    //console.log(state,'state')
    const dispatch = useDispatch()

    useEffect ( () =>
    {
        dispatch(formActionsCustomer())

    },[])

    const handleChange =(e) =>
    {
        const inp = e.target.name
        if(inp === "username")
        {
            setName(e.target.value)
        }
        else if(inp === "email")
        {
            setEmail(e.target.value)
        }
        else
        {
            setMobile(e.target.value)
        }
    }

    const handleClick =(e) =>
    {
        e.preventDefault()

        const formData = {
            
            name : name ,
            mobile : mobile,
            email : email ,
            
        }
        
        //console.log(formData)
        if(  (formData.name ==="" || formData.mobile ==="" || formData.email ==="") )
        {
           swal('All fields are required' ,{icon : 'warning'})
    
        }
        else{
            dispatch(formActionsCustomerpost(formData))
            setName('')  
            setEmail('') 
            setMobile('')
        }
            
    }
    return ( <div>
                <br/>
                
                <form className="form-row align-items-center col-md-6">
                    <h2 >ADD CUSTOMER</h2> <br/>
                          
                    <label>NAME</label>
                    <input type="text" name ="username" onChange ={handleChange} className="form-control"  value ={name}  placeholder="Enter Name"/><br/>
                    
                    <label>EMAIL</label>
                    <input type="email" name ="email" onChange ={handleChange} className="form-control"  value ={email} aria-describedby="emailHelp" placeholder="Enter Email"/><br/>
                    
                    <label >PHONE</label>
                    <input type="text" name ="phone"  onChange ={handleChange}  value ={mobile} className="form-control"  placeholder="Enter Phone"/> <br/>

                    
                    <button type="submit" onClick ={handleClick} className="btn btn-secondary">ADD</button>
                </form>
               
               
                <hr/>
                    { state.length === 0 ? 
                                        <CustomerCard/>    
                                        : <div>
                                            { <div>
                                            <Customertable/>
                                            </div>
                                            }
                                        </div>
                    }  
                
            </div>)
}

export default Customers