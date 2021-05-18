
import axios from 'axios'
import swal from 'sweetalert'

const StartGetUser = (data) =>
{
    console.log('props in login' , data)
    return ( 
                axios.post('https://dct-billing-app.herokuapp.com/api/users/login' , data.formData)
                .then( (response) =>
                {
                    const res = response.data
                   // console.log('token' ,res)      
                    
                    if(res.hasOwnProperty('errors'))
                    {
                         swal(`${res.errors}` ,{
                            icon : 'warning'
                        })
                    }

                    else
                    {
                        swal('Logged In Successfully' ,{
                            icon : 'success'
                        })
                        localStorage.setItem('token' , res.token)
                        data.props.history.push('/Dashboard')
                        data.props.handleAuth()

                    }
                })
                .catch((error) =>
                {
                    swal(`${error.message}`)
                })
    )

}

export default StartGetUser