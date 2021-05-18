import {React,useState ,useEffect} from 'react'
import {useSelector ,useDispatch} from 'react-redux'
//import formActionsgetBill from '../actions/formActionsgetBills'
import formActionsBilldelete from '../actions/formActionsBilldelete'
import BillModal from './billmodal'


const BillTable =(props) =>
{
    const [isOpen,setIsOpen] = useState(false)
    //const [billdata ,setBilldata] = useState([])
    const [billId ,setBillId] = useState(0)
    const dispatch = useDispatch()
     
   
    const billdata = useSelector ( (state) =>
    {
        return state.Bills
    })
    console.log('billdata',billdata)
    

    const showBill =(BillId) =>
    {
        setIsOpen(!isOpen)
        setBillId(BillId)
    }

    const handleView =(e,Id) =>
    {
         e.preventDefault()
         showBill(Id)
    }

   const  handledelete = (e,Id) =>
   {
       e.preventDefault()
       console.log(Id)
       
       dispatch(formActionsBilldelete(Id))
   }
    
   
   return(<div>
                <table className="table table-hover table-secondary">
                <thead>
                    <tr>
                    <th scope="col">Sl.No</th>
                    <th scope="col">Date</th>
                    <th scope="col">Bill Id</th>
                    <th scope="col">AMOUNT</th>
                    <th></th>
                    <th></th>
                    
                    
                    </tr>
                </thead>
                <tbody>
                     { billdata.length !== 0 &&
                        billdata.map (  (ele,i) =>
                            {
                                return ( <tr key ={ele._id}>
                                            <th>{i+1}</th>
                                            <th>{ele.date !== null && ele.date.slice(0,10) }</th>
                                            <th>{ele._id}</th>
                                            <th>{ele.total}</th>
                                            <th><button className ="btn btn-info"
                                            onClick ={ (e) =>
                                                {
                                                    handleView(e,ele._id)
                                                }
                                               }>VIEW</button></th>
                                            <th><button className ="btn btn-danger"onClick ={ (e) =>
                                                {
                                                    handledelete(e,ele._id)
                                                }
                                               }>DELETE</button></th>
                                                  
                                     </tr>)
                            })
                    } 
                </tbody>
                </table>
          { isOpen &&  <BillModal billId ={billId} showBill ={showBill}/> } 
        </div>)
}
export default BillTable