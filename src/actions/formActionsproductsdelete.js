import axios from 'axios'
import swal from 'sweetalert'

const formActionsProductsdelete =(Id) =>
{
    const token = localStorage.getItem('token')

    console.log('Id' ,Id)
    
   
     return (dispatch) =>
                        {
                            console.log('---------------------------')
                             axios.delete(`https://dct-billing-app.herokuapp.com/api/products/${Id}`, {
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
                                    dispatch(deleteProduct(res))   
                                }
                                
                                
                            })
                            .catch ( (error) =>
                            {
                                console.log(error)
                            })
                        }
 }

export default formActionsProductsdelete

const deleteProduct =(data) =>
{
        return (
            {   
               type : 'DELETE_PRODUCT',
               payload : data
            }
        )
}
