import {React,useEffect, useState} from 'react'
import {useSelector , useDispatch} from 'react-redux'
import formActionsgetBill from '../actions/formActionsgetBills'
import formActionsCustomer from '../actions/formActionsCustomer'
import formActionsProducts from '../actions/formActionsProducts'

const DashBoard =() =>
{
    const dispatch = useDispatch()
    const [billdata,setBilldata] = useState(0)

    const state = useSelector( (state) =>
    {
        return state
    })

    console.log('state data',state)

    useEffect( () =>
    {
        dispatch(formActionsCustomer())
        dispatch(formActionsProducts())
        dispatch(formActionsgetBill())

        if(state.Bills.length !== 0)
        {
            let sum =0
            state.Bills.forEach( ele =>
                {
                    sum = sum + ele.total
                })
            setBilldata(sum)    
        }
    },[])

    


    return (    <div>
                <h2 style ={{marginTop : "30px"}}>DASHBOARD</h2>
                <br/>
                <div className ="row">
                    <div className=" col-md-4 card text-center  text-white bg-secondary mb-3" /* style="width: 18rem;" */>
                    <div className="card-body">
                        <h2 className="card-title">TOTAL CUSTOMERS</h2> <br/>
                        <h1 className="card-text">{state.Customers.length}</h1>
                    </div>
                    <br/>
                    <br/>
                    </div>
                    <div className=" col-md -4 card text-center  text-white bg-secondary mb-3" /* style="width: 18rem;" */>
                    <div className="card-body">
                        <h2 className="card-title">TOTAL PRODUCTS</h2> <br/>
                        <h1 className="card-text">{ state.Products.length }</h1>
                    </div>
                    </div>
                    <div className=" col-md-4 card text-center  text-white bg-secondary mb-3" /* style="width: 18rem;" */>
                    <div className="card-body">
                        <h2 className="card-title">TOTAL SALES</h2> <br/>
                        <h1 className="card-text">{billdata}</h1>
                    </div>
                    </div>
                </div>

            </div>)
}

export default DashBoard