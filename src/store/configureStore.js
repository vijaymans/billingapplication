import {createStore , combineReducers, applyMiddleware} from 'redux'
import  thunk from 'redux-thunk'
import AdminDataReducer from '../reducers/admindatareducer'
import CustomerReducer from '../reducers/customerreducer'
import ProductsReducer from '../reducers/Productsreducer'
import BillReducer from '../reducers/Billreducer'

const ConfigureStore =() =>
{
    //console.log('thunk',thunk)
    const  store =  createStore ( combineReducers(
                                        {
                                            AdminData : AdminDataReducer,
                                            Customers : CustomerReducer,
                                            Products : ProductsReducer,
                                            Bills : BillReducer
                                        }), applyMiddleware(thunk)
    )

    return store

}

export default ConfigureStore

