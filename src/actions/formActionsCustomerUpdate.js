import axios from 'axios'
import swal from 'sweetalert'

const formActionsCustomerUpdate =(formData) =>
{
    const token = localStorage.getItem('token')
    
    
    const formdata1 = { name : formData.name,
                        mobile : formData.mobile,
                        email : formData.email}

    console.log('fomdata1' ,formdata1)
   
     return (dispatch) =>
                        {
                            console.log('---------------------------')
                             axios.put(`https://dct-billing-app.herokuapp.com/api/customers/${formData.customerId}`, 
                             formdata1 ,{
                             headers :{
                                'Authorization' : `Bearer ${token}`
                             }
                            })
                              
                            .then ( (response)=>
                            {
                                const res = response.data
                                console.log('Update res--', res)
                                if(res.hasOwnProperty('errors'))
                                {
                                    swal(`${res.message}` , {'icon' : 'warning'} )
                                }
                                else{
                                    dispatch(UpdateCustomer(res))   
                                } 
                                
                                
                            })
                            .catch ( (error) =>
                            {
                                console.log(error)
                            })
                        }
 }

export default formActionsCustomerUpdate

const UpdateCustomer =(data) =>
{
        return (
            {   
               type : 'UPDATE_CUSTOMER',
               payload : data
            }
        )
}
