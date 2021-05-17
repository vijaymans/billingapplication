const initalState ={}

const AdminDataReducer =(state =initalState , action ) =>
{
    switch(action.type)
    {
        case 'ADMIN_DETAILS' : {
                                    return {...action.payload}
                               }
        default : {
                        return {...state}
                  }
    }

}

export default AdminDataReducer