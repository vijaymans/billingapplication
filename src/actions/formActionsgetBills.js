import axios from 'axios'
import swal from 'sweetalert'

const formActionsgetBill =(data) =>
{
    const token = localStorage.getItem('token')
   
     return ( (dispatch) =>
                        {
                            axios.get('https://dct-billing-app.herokuapp.com/api/bills', 
                             {
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
                                    
                                     dispatch(getBill(res))   
                                } 
                                 
                                
                            })
                            .catch ( (error) =>
                            {
                                console.log(error)
                            })
                        }) 
                    }

export default formActionsgetBill

const getBill =(data) =>
{
        return (
            {   
               type : 'GET_BILLS',
               payload : data
            }
        )
}
