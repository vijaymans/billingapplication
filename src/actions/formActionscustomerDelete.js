import axios from 'axios'
import swal from 'sweetalert'

const formActionsCustomerdelete =(Id) =>
{
    const token = localStorage.getItem('token')

    console.log('Id' ,Id)
    console.log('----------------------------')
   
     return (dispatch) =>
                        {
                            console.log('---------------------------')
                             axios.delete(`http://dct-billing-app.herokuapp.com/api/customers/${Id}`, {
                             headers :{
                                'Authorization' : `Bearer ${token}`
                             }
                            })
                              
                            .then ( (response)=>
                            {
                                const res = response.data
                                console.log('res--', res)
                                if(res.hasOwnProperty('errors'))
                                {
                                    swal(`${res.message}` , {'icon' : 'warning'} )
                                }
                                else{
                                    dispatch(deleteCustomer(res))   
                                }
                                
                                
                            })
                            .catch ( (error) =>
                            {
                                console.log(error)
                            })
                        }
 }

export default formActionsCustomerdelete

const deleteCustomer =(data) =>
{
        return (
            {   
               type : 'DELETE_CUSTOMER',
               payload : data
            }
        )
}