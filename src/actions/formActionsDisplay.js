
import axios from 'axios'

const  asyncActionsDisplay = () =>
{
    const token = localStorage.getItem('token')

    const displayObj =(details) =>
    {
        return ( {
            type : 'ADMIN_DETAILS',
            payload : details
        })
    }

    
    return (  (dispatch) =>
                    {
                        
                        axios.get('http://dct-billing-app.herokuapp.com/api/users/account',
                        {
                            headers : {
                                        'Authorization' : `Bearer ${token}`
                                      }
                        })
        
                        .then ( (response) =>
                        {
                            console.log('res -----',response.data)
                            const details = response.data
                            dispatch(displayObj(details))
                        })
                        .catch((error) =>
                        {
                            console.log(error.message)
                        })
                    }
           )
}

export default asyncActionsDisplay

