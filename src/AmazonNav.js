import "./AmazonNav.css"
import React,{useEffect, useState} from 'react'
import { FaSistrix } from "react-icons/fa"
import {FiShoppingCart} from "react-icons/fi"
import { useStateValue } from "./Stateprovider"
import { Link} from "react-router-dom"
import { auth  } from "./firebase";
import Sidebar from "./Sidebar"
import './Login'
import ToggleSidebar from "./ToggleSidebar"
import axios from 'axios'
function AmazonNav(){
   const [{cart, user}] = useStateValue();
   const [query, setQuery] = useState('') 
   const [products, setProducts] = useState([])

   const handleSearch = async () => {
    if(query.trim() === ' ') return;
    try{
        const response = await axios.get("https://fakestoreapi.com/products");
        const data = response.data;
        const filteredProducts = data.filter(product => 
            product.title.toLowerCase().includes(query.toLowerCase())
        )
        setProducts(filteredProducts);

    } catch(err) {
        console.error('Error fetchine the products: ', err )
    }
   }

  
    
       
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
                   
                         <Link to="/" >
                        <img src = "http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                            alt="Amazon"
                            className="header_logo"
                        />

                    </Link>
                    
                   
               
                </div>
                <div className="header_search">

                    <input
                        className="search_input"   
                        type="text" 
                        placeholder="Search Amazon"
                        value={query}
                        onChange={(e) =>{ setQuery(e.target.value)}}
                    />
                    <FaSistrix className="search_icon" onClick={handleSearch}/>
                </div>

                <div className="header_nav">
                    
                        
                    <Link to={!user && '/login'} className="link">
                        <ul className="header_option" onClick={handleAuthentication}>
                            <li className="header_option1" >Hello {!user ? 'Guest': 'User' } </li>
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
                                    {cart.length}
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
