import React from 'react'
import swal from 'sweetalert'
import StartGetUser from '../actions/formActionsLogin'
import {useState} from 'react'

const Login =(props) =>
{
    //console.log('props in login' , props)
    const [email,setEmail] = useState('')
    const [password , setPassword] = useState('')

    const handleChange =(e) =>
    {
        const inp = e.target.name
        if(inp === "email")
        {
            setEmail(e.target.value)
        }
        else
        {
            setPassword(e.target.value)
        }
    }

    const handleClick =(e) =>
    {
        e.preventDefault()

        const formData = {
            email : email ,
            password : password
        }

        const Data ={
            props : props ,
            formData : formData
        }
        
        if(formData.email ==="" || formData.password ==="")
        {
            swal('Both the fields are Mandatory' ,{
                icon : 'warning'
            })
        }
        else
        {
            StartGetUser(Data)
        }

        /* swal('logged in Successfully' ,{
            icon : 'success'
        }) */

    }

    return (    <form className ="col-md-6" >
                    <h2 >LOGIN</h2> <br/>
                          
                    <label>EMAIL</label>
                    <input type="email" name ="email" onChange ={handleChange} className="form-control"  aria-describedby="emailHelp" placeholder="Enter Email"/><br/>
                    
                    <label >PASSWORD</label>
                    <input type="password" name ="password"  onChange ={handleChange} className="form-control"  placeholder="Enter Password"/> <br/>

                    
                    <button type="submit" onClick ={handleClick} className="btn btn-secondary">login</button>
                </form>
           )
}

export default Login