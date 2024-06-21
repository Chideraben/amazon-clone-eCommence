import "./AmazonNav.css"
import React from 'react'
import {FiShoppingCart} from "react-icons/fi"
import { useStateValue } from "./Stateprovider"
import { Link} from "react-router-dom"
import { auth  } from "./firebase";
import Sidebar from "./Sidebar"
import './Login'
import ToggleSidebar from "./ToggleSidebar"
function AmazonNav(){
   const [{basket, user}] = useStateValue();

  const handleAuthentication = () => {
    if(user){
        auth.signOut()
    }
  }
  
  // const history = useNavigate();
    return(
        <div className="header">
            <div className="amazon-cont">
                <div className="toggle-amazon">
                    <ToggleSidebar/>
                    <Link to="/home">
                        <img src = "http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                            alt="Amazon"
                            className="header_logo"
                        />

                    </Link>
               
                </div>
                <div className="header_search">

                    <input className="search_input" type="text" placeholder="Search Amazon" />
                    <p className="search_icon"></p>
                </div>

                <div className="header_nav">
                    
                        
                    <Link to={!user && '/login'} className="link">
                        <ul className="header_option" onClick={handleAuthentication}>
                            <li className="header_option1" >Hello {!user ? 'Guest': user.email } </li>
                            <li className="header_option2"  >{user ? 'SignOut' : 'SignIn'} </li>
                           
                        </ul>
                    </Link>
                   
                
                

                    <ul className="header_option order">
                        <li className="header_option1">Return</li>
                        <Link to ="/errorpage">
                            <li className="header_option2">& Order</li>
                        </Link>
                       
                    </ul>

                    <ul className="header_option order">
                        <li className="header_option1">Your</li>
                        <li className="header_option2">Prime</li>
                    </ul>

                    
                        <Link to="/checkout">
                            <ul className="header_basket" >
                                <FiShoppingCart className="basket"/>
                                <span className=" header_numder">
                                    {basket?.length}
                                </span>
                            </ul>
                           
                        </Link>
                            
                </div>
            </div>
            <Sidebar/>
        </div>
    )
}

export default AmazonNav