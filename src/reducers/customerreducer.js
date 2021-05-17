const initalCustomerState =[]

const CustomerReducer =(state =initalCustomerState , action) =>
{
    switch ( action.type)
    {
        case 'GET_CUSTOMERS' : {
                                    return [...action.payload]
                              }
        

        case 'ADD_CUSTOMER' : {
                                     return [ ...state , {...action.payload }]
                              }

        case 'UPDATE_CUSTOMER' : {
                                    const  newstate1 = state.map( ele =>
                                        {
                                            if( ele._id === action.payload._id)
                                            {
                                                return {...action.payload}
                                            }
                                            else{
                                                return {...ele}
                                            }
                                        })
                                    return newstate1
                                 }
        
        case 'DELETE_CUSTOMER' : {
                                     const newstate = state.filter ( ele =>
                                        {
                                            return ele._id !== action.payload._id
                                        })
                                    return [...newstate]
                                 }


        default             : {
                                 return [...state]
                             }
    }

}

export default CustomerReducer