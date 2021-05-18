import axios from 'axios'

const formActionsOneCustomer =(Data) =>
{
    console.log('DATA' , Data)
    const token = localStorage.getItem('token')
   
     return ( (dispatch) =>
                        {
                            axios.get(`https://dct-billing-app.herokuapp.com/api/customers/${Data.customerId}`,{
                                headers : {
                                            'Authorization' : `Bearer ${token}`
                                          }
                                    }
                            )
                            .then ( (response)=>
                            {
                                const res = response.data
                                console.log('one customer', res)
                                Data.updatefunction(res)
                                    
                            })
                            .catch ( (error) =>
                            {
                                console.log(error)
                            })
                        }) 
                    }

export default formActionsOneCustomer

