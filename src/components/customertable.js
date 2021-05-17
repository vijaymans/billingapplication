import {React ,useState} from 'react'
import formActionsCustomerdelete from '../actions/formActionscustomerDelete'

import CustomerModal from './customermodal'
import {useSelector,useDispatch} from 'react-redux'
import Modal from "react-bootstrap/Modal";
//import "bootstrap/dist/css/bootstrap.min.css";

const Customertable =() =>
{
    const [isOpen,setIsOpen] =  useState(false)
    const [custId , setCustId] = useState(0)

    const state = useSelector( (state) =>
                    {
                        return state.Customers
                    })
    const dispatch = useDispatch()

    

    const handleClick = (Id)=>
    {
        dispatch(formActionsCustomerdelete(Id))
    }

    const showModal = (Id) => 
    { 
        setIsOpen(true)
        setCustId(Id)
      };
    
       const hideModal = () => {
        setIsOpen(false);
      }; 

   
    return (<div>
            <table className="table table-hover table-secondary">
            <thead>
                <tr>
                <th scope="col">NAME</th>
                <th scope="col">PHONE</th>
                <th scope="col">EMAIL</th>
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
                                        <th>{ele.mobile}</th>
                                        <th>{ele.email}</th>
                                        <th>
                                        
                                        <button  onClick ={ () =>
                                        {
                                            showModal(ele._id)
                                            
                                        }}className = "btn btn-info">EDIT</button></th>  
                                                
                                    
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
                                <CustomerModal  hideModal ={hideModal} custId ={custId}/>
                                <Modal.Footer>
                                <button className = "btn btn-dark" onClick={hideModal}>Cancel</button>
                               {/*  <button className = "btn btn-success">Save</button> */}
                                </Modal.Footer>
                            </Modal>
                        </div>
           }

                
           </div>
    )

}

export default Customertable