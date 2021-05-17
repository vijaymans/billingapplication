import {React , useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import asyncActionsDisplay from '../actions/formActionsDisplay'



const AdminInfo =() =>
{
    const dispatch = useDispatch()

    const state = useSelector( (state) =>
    {
        return state.AdminData
    })



    useEffect ( () =>
    {
         if(Object.keys(state).length === 0)
        {
            
            dispatch (asyncActionsDisplay())
        }            

    },[])


    return ( <div>
             <br/>
             <br/>
             <div  className="card text-center  text-white bg-secondary mb-3">
                <div className="card-header" >
                   <h2>PROFILE</h2> 
                </div>
                <div className="card-body">
               
                    <div>
                    <h2 className="card-text">USER NAME - {state.username}</h2> <br/>
                    <h3 className ="card-text">BUSINESS NAME -{state.businessName}</h3><br/>
                    <h4 className ="card-text">EMAIL - {state.email}</h4><br/>
                    <h5 className ="card-text">ADDRESS - {state.address}</h5>
                    </div>
                
               </div>
                
               </div>
               
    </div>)
}

export default AdminInfo