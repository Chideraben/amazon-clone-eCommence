import React from "react";
import './CheckoutProduct.css'
import { useStateValue } from "./Stateprovider";
import { useState, useEffect } from "react";
function CheckoutProduct({id,image,title,price,rating,hideButton}){
    const [{basket}, dispatch] = useStateValue()

    const removeFromBasket = () => {
        //remove the item from basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id:id,
        })
    }

   
       
    return(

        <div className="checkoutProduct">
     
               <div className="checkoutProduct_info" >
                   <div className="">
                       <img src={image} alt=""/>

                       <p className="checkoutProduct_title">{title}</p>
                           <p className="checkoutProduct_price">
                           <small>$</small>
                           <strong>{price}</strong>
                       </p>

                       <div className="checkoutProduct_rating">
                       {Array.from({ length : 
                                (Math.floor(rating))
                             })
                            .map((_,i) => (
                                <p key={i}>⭐</p>
                                ))} 
                          {/* {values.rating.rate} (Count:{values.rating.count})*/}
                       </div>
                   </div>
       
                   {!hideButton && (
                    <button onClick={removeFromBasket} >Remove From Basket</button>
                )}
               </div>
          
  
   </div>

      
        
    )
}
export default CheckoutProduct

