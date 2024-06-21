import React, {useState, useEffect} from "react"
import "./Product.css"
import {FiShoppingCart} from "react-icons/fi"
import { useStateValue } from "./Stateprovider"
import { useNavigate } from "react-router";
import axios from 'axios'
function Product({id , title, rating, price, image}) {  
      const [images ,setImages] = useState([])

       const navigate = useNavigate()
    const [{basket,user}, dispatch] = useStateValue();
    const addToBasket = () => {
        if(!user){
            navigate("/login")
        }
        //dispatch the items into the data layer 
       else{ dispatch({
            type: "ADD_TO_BASKET",
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating,

            }, });
       }
           
    };
     

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
        <div className="home_row">
             {images.map(values => {
            return(
                <>
                    <div className="product" key={values.id}>
                        <div className="product_info">
                            <p className="title">{values.title}</p>
                                <p className="product_price">
                                <small>$</small>
                                <strong>{values.price}</strong>
                            </p>
  
                            <div className="product_rating">
                             {Array(rating).fill().map((_,i) => (
                                <p>🌟</p>
                                ))} 
                               {/* {values.rating.rate} (Count:{values.rating.count})*/}
                            </div>
                        </div>
            
                        <img src={values.image} alt=""/>
                        <button className="button" onClick={addToBasket}>Add to Cart <FiShoppingCart/></button>
                    </div>
                </>
            )
          })}
       
        </div>
    )
       
        
    
}
export default Product