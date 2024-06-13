import React from "react"
import "./Product.css"
import {FiShoppingCart} from "react-icons/fi"
import { useStateValue } from "./Stateprovider"
function Product({id , title, rating, price, image}) {
       
    const [{basket}, dispatch] = useStateValue();
    const addToBasket = () => {
        //dispatch the items into the data layer 
        dispatch({
            type: "ADD_TO_BASKET",
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating,

            },
        });
    };

       
    return(
        <div className="product">
            <div className="product_info">
                <p className="title">{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="product_rating">
                    {Array(rating).fill().map((_,i) => (
                        <p>🌟</p>
                    ))}
                </div>
            </div>
            
            <img src={image} alt=""/>
            <button className="button" onClick={addToBasket}>Add to Cart <FiShoppingCart/></button>
        </div>

        
    )
}
export default Product