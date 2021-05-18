
import axios from 'axios'
import swal from 'sweetalert'

const StartStoreUser = (data) =>
{
    
    return ( 
                axios.post('https://dct-billing-app.herokuapp.com/api/users/register' , data.formData)
                .then( (response) =>
                {
                    const res = response.data
                    console.log('register details' , res)
                    if(res.hasOwnProperty('errors'))
                    {
                        
                        swal(`${res.message}`)
                    }

                    else
                    {
                        swal('Registered Successfully' ,{
                            icon : 'success'
                        })
                        data.props.history.push('/Login')
                    }
                })
                .catch((error) =>
                {
                    swal(`${error.message}`)
                })
    )

}

export default StartStoreUser