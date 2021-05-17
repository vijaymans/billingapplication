const initalState =[]

const BillReducer =(state =initalState , action ) =>
{
    switch(action.type)
    {
        case 'GET_BILLS' : {
                             return [...action.payload]
                           }
        case 'ADD_BILL' :     {
                                    return [ {...action.payload} , ...state]
                              }

        case 'DELETE_BILL' :{
                                const newstate = state.filter ( ele =>
                                    {
                                        return ele._id !== action.payload._id
                                    })
                                console.log('newstate',newstate)
                                return [...newstate]
                             }
        
        default : {
                        return [...state]
                  }
    }

}

export default BillReducer