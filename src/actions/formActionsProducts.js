import axios from 'axios'

const formActionsProduct =() =>
{
    const token = localStorage.getItem('token')
   
     return ( (dispatch) =>
                        {
                            axios.get('https://dct-billing-app.herokuapp.com/api/products',{
                                headers : {
                                            'Authorization' : `Bearer ${token}`
                                          }
                                    }
                            )
                            .then ( (response)=>
                            {
                                const res = response.data
                                console.log('res', res)
                                dispatch(getProduct(res))    
                                
                            })
                            .catch ( (error) =>
                            {
                                console.log(error)
                            })
                        }) 
                    }

export default formActionsProduct

const getProduct =(data) =>
{
        return (
            {   
               type : 'GET_PRODUCT',
               payload : data
            }
        )
}
