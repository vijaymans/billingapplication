import axios from 'axios'

const formActionsCustomer =() =>
{
    const token = localStorage.getItem('token')
   
     return ( (dispatch) =>
                        {
                            axios.get('http://dct-billing-app.herokuapp.com/api/customers',{
                                headers : {
                                            'Authorization' : `Bearer ${token}`
                                          }
                                    }
                            )
                            .then ( (response)=>
                            {
                                const res = response.data
                                //console.log('res-----------------------', res)
                                dispatch(getCustomers(res))    
                                
                            })
                            .catch ( (error) =>
                            {
                                console.log(error)
                            })
                        }) 
                    }

export default formActionsCustomer

const getCustomers =(data) =>
{
        return (
            {   
               type : 'GET_CUSTOMERS',
               payload : data
            }
        )
}