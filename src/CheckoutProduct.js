import React from "react";
import './CheckoutProduct.css'
import { useStateValue } from "./Stateprovider";
import axios from 'axios'
import { useState, useEffect } from "react";
function CheckoutProduct({id,image,title,price,rating,hideButton}){
    const [{basket}, dispatch] = useStateValue()
    const [images ,setImages] = useState([])

    const removeFromBasket = () => {
        //remove the item from basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id:id,
        })
    }

    useEffect(()=>{
        const fetchimage = async () =>{
            try{
                const response = await axios.get("https://fakestoreapi.com/products");       
                const jsonData = await response.data;
                 setImages(jsonData)
            }
            catch(err){
                console.log(err.message)
             }

        }


        fetchimage()
    },[])
       
    return(

        <div className="checkoutProduct">
        {images.map(values => {
       return(
           <>
               <div className="checkoutProduct_info" key={values.id}>
                   <div className="">
                       <img src={values.image} alt=""/>

                       <p className="checkoutProduct_title">{values.title}</p>
                           <p className="checkoutProduct_price">
                           <small>$</small>
                           <strong>{values.price}</strong>
                       </p>

                       <div className="checkoutProduct_rating">
                        {Array(rating).fill().map((_,i) => (
                           <p>🌟</p>
                           ))} 
                          {/* {values.rating.rate} (Count:{values.rating.count})*/}
                       </div>
                   </div>
       
                   {!hideButton && (
                    <button onClick={removeFromBasket} >Remove From Basket</button>
                )}
               </div>
           </>
       )
     })}
  
   </div>

      
        
    )
}
export default CheckoutProduct

