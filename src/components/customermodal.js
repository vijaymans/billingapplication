import {React ,useState ,useEffect} from 'react'
import {useDispatch} from 'react-redux'
import formActionsOneCustomer from '../actions/formActionsOneCustomer'
import formActionsCustomerUpdate from '../actions/formActionsCustomerUpdate'

const CustomerModal = (props) => 
{
    const customerId = props.custId

    const [uname ,setUName] = useState('')
    const [email ,setEmail] = useState('')
    const [mobile ,setMobile] = useState('')

    const dispatch = useDispatch() 

    const updatefunction = (Data) =>
    {
        
        setUName(Data.name)
        setEmail(Data.email)
        setMobile(Data.mobile)
    }
    

    useEffect( () =>
    {
        const Dataobj = {   customerId : customerId,
                            updatefunction : updatefunction
                        }
        
        dispatch(formActionsOneCustomer(Dataobj))

    },[])

    const handleChange =(e) =>
    {
        const inp = e.target.name
        if( inp === "username")
        {
            setUName(e.target.value)
        }
        else if( inp === "email")
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
            name : uname ,
            email : email ,
            mobile : mobile ,
            customerId : customerId
        }
        console.log(formData)
       dispatch(formActionsCustomerUpdate(formData))
       props.hideModal()
    }
    
    return( <div className ="container">
               <form>
                             
                    <label>NAME</label>
                    <input type="text" name ="username"  onChange ={handleChange}  className="form-control"   value ={uname}   placeholder="Enter Name"/><br/>
                    
                    <label>EMAIL</label>
                    <input type="email" name ="email"  onChange ={handleChange}  className="form-control"   value ={email}  aria-describedby="emailHelp" placeholder="Enter Email"/><br/>
                    
                    <label >PHONE</label>
                    <input type="text" name ="phone"   onChange ={handleChange}    value ={mobile}  className="form-control"  placeholder="Enter Phone"/> <br/>

                    
                    <button type="submit"  onClick ={handleClick}  className="btn btn-secondary">SAVE</button>
                </form>
                </div>)
}

export default CustomerModal