import {React,useState ,useEffect} from 'react'
import {useSelector ,useDispatch} from 'react-redux'
import Modal from "react-bootstrap/Modal"
import formActionsCreateBill from '../actions/formActionsCreateBill'


const BillModal = (props) => 
{
    const {showBill,billId} = props
    const [billobj ,setBillObj] = useState({})
    const [customerobj ,setCustomerObj] = useState({})
    const [prodobj,setProdObj] = useState({})
    const [prodobj1,setProdObj1] = useState({})

    const dispatch = useDispatch()

   
        const bills = useSelector( (state) =>
        {
            return state.Bills
        })
        const Customers = useSelector( (state) =>
        {
            return state.Customers
        })
        const Products = useSelector( (state) =>
        {
            return state.Products
        })
    
 

    useEffect( () =>
    {
        //filtering out to get billdata
       const newbilldata = bills.find( (ele) =>
       {
           return ele._id === billId
       })
       console.log(newbilldata)
       setBillObj(newbilldata)

       //filtering out to get product data

       const lineItems1 = newbilldata.lineItems
       console.log('lineItems1', lineItems1)
       setProdObj(lineItems1)

     //filtering out to get product name
    const lineItems2 = lineItems1.map(ele =>
        {
            const obj=Products.find(  prod =>
                    {
                        return  ele.product === prod._id
                 
                    })
            return obj
        })
    console.log('lineItems2--------', lineItems2)
    setProdObj1(lineItems2)


       //filtering out to get customerdetails based on customer id
       const customerdetails = Customers.find( ele =>
        {
            return ele._id === newbilldata.customer
        })
       // console.log('customerdetails', customerdetails)
        setCustomerObj(customerdetails)
        
        
    },[])

    const handleClick =() =>
    {
        showBill()
    }
    
        return( Object.keys(billobj).length !== 0 && 

        <div>
        <Modal style ={ {color : "black" , marginLeft : "100px"}} show={true}>
        <Modal.Header>
        <Modal.Title style ={{marginLeft : "150px"}}>INVOICE</Modal.Title>
        </Modal.Header>
            <div className ="container">
                <h5>DATE - {billobj.date !== null && billobj.date.slice(0,10)} </h5>
                <h5>CUSTOMER NAME - {customerobj.name} </h5> 
                <h5>MOBILE - {customerobj.mobile} </h5> 
                <h5>EMAIL - {customerobj.email} </h5> 
                <br/>
                <table  className="table table-bordered tablehover">
                    <thead>
                        <th scope="col">SL.NO</th>
                        <th scope="col">PRODUCT NAME</th>
                        <th scope="col">QUANTITY</th>
                        <th scope="col">PRICE</th>
                        <th scope="col">SUB TOTAL</th>
                    </thead>
                    <tbody>
                        {
                            prodobj.map( (ele,i) =>
                                {
                                    return <tr key ={ele._id}>
                                            <td>{i+1}</td>
                                            <td>{prodobj1[i].name}</td>
                                            <td>{ele.quantity}</td>
                                            <td>{ele.price}</td>
                                            <td>{ele.subTotal}</td>
                                            </tr>
                                })
                        }
                    </tbody>
                </table>

                <h5>TOTAL AMOUNT - {billobj.total}</h5>
                <br/>
                
            </div>
        
        
        
        <Modal.Footer>
        <button className = "btn btn-dark" onClick={handleClick}>Cancel</button>
    
        </Modal.Footer>
    </Modal>
    </div> 
        
    )
}

export default BillModal