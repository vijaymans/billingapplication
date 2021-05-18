import axios from 'axios'
import swal from 'sweetalert'
const formActionsCustomerpost =(data) =>
{
    const token = localStorage.getItem('token')
   
     return ( (dispatch) =>
                        {
                            axios.post('https://dct-billing-app.herokuapp.com/api/customers', 
                            data , {
                                headers : {
                                            'Authorization' : `Bearer ${token}`
                                          }
                                    }
                            )
                            .then ( (response)=>
                            {
                                const res = response.data
                                console.log('res--', res)
                                if(res.hasOwnProperty('errors'))
                                {
                                    swal(`${res.message}` , {'icon' : 'warning'} )
                                }
                                else{
                                    dispatch(postCustomer(res))   
                                }
                                
                                
                            })
                            .catch ( (error) =>
                            {
                                console.log(error)
                            })
                        }) 
                    }

export default formActionsCustomerpost

const postCustomer =(data) =>
{
        return (
            {   
               type : 'ADD_CUSTOMER',
               payload : data
            }
        )
}
