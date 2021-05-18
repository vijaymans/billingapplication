import axios from 'axios'
import swal from 'sweetalert'

const formActionsProductUpdate =(formData) =>
{
    const token = localStorage.getItem('token')
    
    
    const formdata1 = { name : formData.name,
                        price: formData.price
                        }

    console.log('fomdata1' ,formdata1)
   
     return (dispatch) =>
                        {
                            console.log('---------------------------')
                             axios.put(`https://dct-billing-app.herokuapp.com/api/products/${formData.productId}`, 
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
                                    dispatch(UpdateProduct(res))   
                                } 
                                
                                
                            })
                            .catch ( (error) =>
                            {
                                console.log(error)
                            })
                        }
 }

export default formActionsProductUpdate

const UpdateProduct =(data) =>
{
        return (
            {   
               type : 'UPDATE_PRODUCT',
               payload : data
            }
        )
}