const productsInitalState =[]

const ProductsReducer = ( state = productsInitalState , action) =>
{
    switch(action.type)
    {
        case 'GET_PRODUCT' : {
                                
                                return [...action.payload]
                             }

        case 'ADD_PRODUCT' : {
                                return [...state , {...action.payload} ]
                             }

        case 'UPDATE_PRODUCT' : {
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

        case 'DELETE_PRODUCT' :{
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

export default ProductsReducer