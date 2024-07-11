import React from "react";
import './CheckoutProduct.css'
import { useStateValue } from "./Stateprovider";
import { useState, useEffect } from "react";
function CheckoutProduct({hideButton}){
    const [{cart}, dispatch] = useStateValue()

    const removeFromCart = (id) => {
        //remove the item from basket
        dispatch({
            type: 'REMOVE_FROM_CART',
            id:id,
        })
    }

   const increaseQuantity = (id) => {
    dispatch({
        type: 'INCREASE_QUANTITY',
        id: id
    });
   };
       
   const decreaseQuantity = (id) => {
    dispatch({
        type: 'DECREASE_QUANTITY',
        id: id
    });
   };
    return(

        <div className="checkoutProduct">
            {cart.map((product)=>(
                <div className="checkoutProduct_info" >
                    <div className="" key={product.id}>
                       <img src={product.image} alt="" className="checkoutProduct_image"/>

                       <p className="checkoutProduct_title">{product.title}</p>
                           <p className="checkoutProduct_price">
                           <small>$</small>
                           <strong>{product.price}</strong>
                       </p>

                       <div className="checkoutProduct_rating">
                       {Array.from({ length : 
                                (Math.floor(product.rating.rate))
                             })
                            .map((_,i) => (
                                <p key={i}>⭐</p>
                                ))} 
                          {/* {values.rating.rate} (Count:{values.rating.count})*/}
                       </div>
                    </div>
                    <button onClick={()=> removeFromCart(product.id)} >Remove From Basket</button>
                </div>
            ))}

  
   </div>

      
        
    )
}
export default CheckoutProduct

