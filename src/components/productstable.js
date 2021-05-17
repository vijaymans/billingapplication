import {React ,useState} from 'react'
import formActionsProductsdelete from '../actions/formActionsproductsdelete'
import Modal from "react-bootstrap/Modal";
import ProductModal from './productmodal'
import {useSelector,useDispatch} from 'react-redux'

const Productstable =() =>
{
    
    const [isOpen,setIsOpen] =  useState(false)
    const [prodId , setProdId] = useState(0)

    const state = useSelector( (state) =>
                    {
                        return state.Products
                    })
    const dispatch = useDispatch()

    

    const handleClick = (Id)=>
    {
        
        dispatch(formActionsProductsdelete(Id))
    }

    const showModal = (Id) => 
    { 
        setIsOpen(true)
        setProdId(Id)
      };
    
       const hideModal = () => {
        setIsOpen(false);
      }; 

   
    return (<div>
            <table className="table table-hover table-secondary">
            <thead>
                <tr>
                <th scope="col">NAME</th>
                <th scope="col">PRICE</th>
                <th></th>
                <th></th>
                
                </tr>
            </thead>
            <tbody>
                {
                    state.map ( ele =>
                        {
                            return ( <tr key ={ele._id}>
                                        <th>{ele.name}</th>
                                        <th>{ele.price}</th>
                                        <th>
                                         <button onClick ={ () =>
                                        {
                                            showModal(ele._id)
                                            
                                        }} className = "btn btn-info">EDIT</button>
                                        </th>  
                                        <th> <button onClick ={ () =>
                                        {
                                            handleClick(ele._id)
                                        }} className="btn btn-danger">DELETE</button></th>
                                        
                                   </tr>)
                        })
                }
            </tbody>
            </table>
            { isOpen &&   <div>
                            <Modal style ={ {color : "black" , marginLeft : "100px"}} show={isOpen} onHide={hideModal}>
                                <Modal.Header>
                                <Modal.Title>EDIT</Modal.Title>
                                </Modal.Header>
                                <ProductModal  hideModal ={hideModal} prodId ={prodId}/>
                                <Modal.Footer>
                                <button className = "btn btn-dark" onClick={hideModal}>Cancel</button>
                               
                                </Modal.Footer>
                            </Modal>
                        </div>
           }
            
            
           </div>
    )

}

export default Productstable