import axios from 'axios'

const formActionsOneProduct =(Data) =>
{
    console.log('DATA' , Data)
    const token = localStorage.getItem('token')
   
     return ( (dispatch) =>
                        {
                            axios.get(`https://dct-billing-app.herokuapp.com/api/products/${Data.productId}`,{
                                headers : {
                                            'Authorization' : `Bearer ${token}`
                                          }
                                    }
                            )
                            .then ( (response)=>
                            {
                                const res = response.data
                                console.log('one product', res)
                                Data.updatefunction(res)
                                    
                            })
                            .catch ( (error) =>
                            {
                                console.log(error)
                            })
                        }) 
                    }

export default formActionsOneProduct

