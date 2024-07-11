import React, {useState, useEffect} from "react"
import "./Product.css"
import {FiShoppingCart} from "react-icons/fi"
import { useStateValue } from "./Stateprovider"
import { useNavigate } from "react-router";
import axios from 'axios'

function Product() {  
    const [products ,setProducts] = useState([])

       const navigate = useNavigate()
    const [{cart,user}, dispatch] = useStateValue();
    const addToCart = (product) => {
        if(!user){
            navigate("/login")
        }
        //dispatch the items into the data layer 
       else{ dispatch({
            type: "ADD_TO_CART",
            item: product
             });
       };
           
    };
     

    useEffect(()=>{
        const fetchimage = async () =>{
            try{
                const response = await axios.get("https://fakestoreapi.com/products");       
                const jsonData = await response.data;
                 setProducts(jsonData)
            }
            catch(err){
                console.log(err.message)
             }
    
        }
    
    
        fetchimage()
    },[])

       
    return(
        <div className="home_row">
             {products.map((product) => {
            return(
                <>
                    <div className="product" key={product.id} >
                        <div className="product_info">
                            <p className="title">{product.title}</p>
                                <p className="product_price">
                                <small>$</small>
                                <strong>{product.price}</strong>
                            </p>
 
                            <div className="product_rating">
                             {Array.from({ length : 
                                (Math.floor(product.rating.rate))
                             })
                            .map((_,i) => (
                                <p key={i}>⭐</p>
                                ))} 
                               {/* {values.rating.rate} (Count:{values.rating.count})*/}
                            </div>
                        </div>
            
                        <img src={product.image} alt=""/>
                        <button className="button" onClick={()=>addToCart(product)}>Add to Cart <FiShoppingCart/></button>
                    </div>
                </>
                 )
            })}
        </div>
    )
       
        
    
}
export default Product