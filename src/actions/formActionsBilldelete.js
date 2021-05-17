import axios from 'axios'
import swal from 'sweetalert'

const formActionsBilldelete =(Id) =>
{
    const token = localStorage.getItem('token')

    console.log('Id' ,Id)
    console.log('----------------------------')
   
     return (dispatch) =>
                        {
                            console.log('---------------------------')
                             axios.delete(`http://dct-billing-app.herokuapp.com/api/bills/${Id}`, {
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
                                    dispatch(deleteBill(res))   
                                }
                                
                                
                            })
                            .catch ( (error) =>
                            {
                                console.log(error)
                            })
                        }
 }

export default formActionsBilldelete

const deleteBill =(data) =>
{
        return (
            {   
               type : 'DELETE_BILL',
               payload : data
            }
        )
}