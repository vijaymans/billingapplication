import axios from 'axios'
import swal from 'sweetalert'

const formActionsCreateBill =(data) =>
{
    const token = localStorage.getItem('token')
   
     return ( (dispatch) =>
                        {
                            axios.post('https://dct-billing-app.herokuapp.com/api/bills', 
                            data , {
                                headers : {
                                            'Authorization' : `Bearer ${token}`
                                          }
                                    }
                            )
                            .then ( (response)=>
                            {
                                const res = response.data
                                console.log('bill response', res)

                                 if(res.hasOwnProperty('errors'))
                                {
                                    swal(`${res.message}` , {'icon' : 'warning'} )
                                }
                                 else{
                                    
                                     dispatch(postBill(res))   
                                } 
                                 
                                
                            })
                            .catch ( (error) =>
                            {
                                console.log(error)
                            })
                        }) 
                    }

export default formActionsCreateBill

const postBill =(data) =>
{
        return (
            {   
               type : 'ADD_BILL',
               payload : data
            }
        )
}
