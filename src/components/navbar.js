import {React , useState , useEffect}  from 'react'
import swal from 'sweetalert'
import Register from './register'
import Home from './home'
import {Link ,Route} from 'react-router-dom'
import Login from './login'
import AdminInfo from './adminInfo'
import Customers from  './customers'
import Products from './products'
import Bill from './bill'
import DashBoard from './dashboard'



const NavBar =() =>
{
    const [loggedIn , setLoggedIn] = useState(false)

    const handleAuth =() =>
    {
        setLoggedIn(!loggedIn)
    }

    useEffect ( () =>
    {
        if(localStorage.getItem('token'))
        {
            handleAuth()
        }

    } ,[])

    return ( loggedIn ? <div>
                         <div className ="navbar navbar-expand-lg navbar-light bg-secondary">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className ="nav-item-active">
                                    <Link to ="/Dashboard" style ={ {color :'white' , textDecoration :'none' ,marginLeft :'50px'}}>DASHBOARD</Link>
                                 </li>
                            </ul>
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className ="nav-item-active">
                                    <Link to ="/Customers" style ={ {color :'white' , textDecoration :'none', marginLeft :'50px'}}>CUSTOMERS</Link>
                                 </li>
                            </ul>
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className ="nav-item-active">
                                    <Link to ="/Products" style ={ {color :'white' , textDecoration :'none', marginLeft :'50px'}}>PRODUCTS</Link>
                                 </li>
                            </ul>
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className ="nav-item-active">
                                    <Link to ="/Bill" style ={ {color :'white' , textDecoration :'none', marginLeft :'50px'}}>BILL</Link>
                                 </li>
                            </ul>
                            

                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className ="nav-item-active">
                                    <Link to ="/AdminInfo" style ={ {color :'white' , textDecoration :'none', marginLeft :'300px'}}>ADMIN DETAILS</Link>
                                 </li>
                            </ul>

                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className ="nav-item-active">
                                    <Link to ="" style ={ {color :'white' , textDecoration :'none', marginLeft :'50px'}}
                                    onClick ={ () =>
                                    {
                                        localStorage.removeItem('token')
                                        handleAuth()
                                        swal('Logged Out Successfully' ,{ icon : "success"})

                                    }}>LOGOUT</Link>
                                 </li>
                            </ul>
                         </div>

                        <div>
                            <Route path ="/Dashboard" component ={DashBoard} exact ={true}></Route>
                            <Route path ="/Customers" component ={Customers} exact ={true}></Route>
                            <Route path ="/Products" component ={Products} exact ={true}></Route>
                            <Route path ="/Bill" component ={Bill} exact ={true}></Route>
                            <Route path ="/AdminInfo" component ={AdminInfo} exact ={true}></Route>

                        </div>

                        </div> 

                      :
                        <div>
                            <div className="navbar navbar-expand-lg navbar-light bg-secondary">
                                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className="nav-item active">
                                    <Link to ="/Home"  style ={ {color : 'white' , textDecoration : 'none' , marginLeft: '50px'}}>HOME</Link>
                                </li> 
                                <li className="nav-item">
                                    <Link  to= "/Register" style ={ {color : 'white' , textDecoration : 'none' ,marginLeft: '80px'}}>REGISTER</Link> 
                                </li>
                                <li className="nav-item">
                                    <Link   to ="/Login" style ={ {color : 'white' , textDecoration : 'none' ,marginLeft: '80px'}}>LOGIN</Link> 
                                </li>
                                </ul>
                            </div>

                            <div>
                            <Route path ="/Home" component={Home} exact ={true}/>
                            <Route path ="/Register" component={Register} exact ={true}/>
                            <Route path ="/Login"  render = { (props) =>
                                                                        {
                                                                            return <Login {...props} handleAuth ={handleAuth}/>
                                                                        }
                                                            }  exact ={true}/>
                            </div>

                        </div>)
}

export default NavBar