import React from 'react'
import {useState} from 'react'
import swal from 'sweetalert'
import StartStoreUser from '../actions/formActionsRegister'
import validator from 'validator'

const Register =(props) =>
{
    const [username,setUserName] = useState('')
    const [email ,setEmail] = useState('')
    const [password ,setPassword] = useState('')
    const [businessName ,setBusinessName] = useState('')
    const [address ,setAddress] = useState('')

    const handleChange  = (e) =>
    {
        const inp = e.target.name
        if(inp === "username")
        {
            setUserName(e.target.value)
        }
        else if( inp === "email")
        {
            setEmail(e.target.value)    
        }
        else if( inp === "password")
        {
            setPassword(e.target.value)
        }
        else if( inp === "busname")
        {
            setBusinessName(e.target.value)
        }
        else
        {
            setAddress(e.target.value)
        }
        
    }

    const handleClick =(e) =>
    {
        e.preventDefault()

        const formData ={
                            username : username,
                            email : email,
                            password : password,
                            businessName :businessName,
                            address : address
                        }

        const check1 = ( formData.username ==="" || formData.email ==="" || formData.password ==="" || formData.businessName ==="" ||
        formData.address ==="" )

        const check2 = (email !== "" &&  !validator.isEmail(email))

        console.log('check1' ,check1)
        console.log('check2' ,check2)
        
        if(check1)
        {
           
            swal('Please fill out all the fields' , { icon : "warning"  , color : "grey"} )
        }

        //email field is there but format is wrong
        if(check2)
        {
            swal('Enter a valid email address' ,{
                icon :'warning'
            })
        }

        //only if check1 and check2  both are false then only execute  below code
  
        if(!check1 && !check2)
        {
            console.log(props)

             const Data = {
                props : props ,
                formData : formData
            }
            StartStoreUser(Data) 

        } 
        
    }

    
    return (    <form className ="col-md-6" >
                    <h2 >REGISTER</h2> <br/>
                    
                    <label >USER NAME</label>
                    <input type="text" className="form-control" name="username" onChange ={handleChange} placeholder="Enter UserName"/> <br/>
                    
                    <label>EMAIL</label>
                    <input type="text" className="form-control"  name="email"onChange ={handleChange}  aria-describedby="emailHelp" placeholder="Enter Email"/><br/>
                    
                    <label >PASSWORD</label>
                    <input type="password" className="form-control" name="password" onChange ={handleChange}   placeholder="Enter Password"/> <br/>
                    
                    
                    <label >BUSINESS NAME</label>
                    <input type="text" className="form-control"  name="busname" onChange ={handleChange}  placeholder="Enter BusinessName"/> <br/>

                    
                    <label >ADDRESS</label>
                    <textarea className="form-control"  name="address" onChange ={handleChange}  rows="2"></textarea> <br/>
                    
                    
                    <button type="submit" onClick ={handleClick} className="btn btn-secondary">Register</button>
                </form>
           )
}

export default Register