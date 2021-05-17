import axios from 'axios'
import swal from 'sweetalert'

const formActionsProductpost =(data) =>
{
    const token = localStorage.getItem('token')
   
     return ( (dispatch) =>
                        {
                            axios.post('http://dct-billing-app.herokuapp.com/api/products', 
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
                                    dispatch(postProduct(res))   
                                }
                                
                                
                            })
                            .catch ( (error) =>
                            {
                                console.log(error)
                            })
                        }) 
                    }

export default formActionsProductpost

const postProduct =(data) =>
{
        return (
            {   
               type : 'ADD_PRODUCT',
               payload : data
            }
        )
}