import React from "react"
import "./homepage.css"
import Product from"./Product"
import { useState, useEffect } from "react";
import Loader from "./Loader";
function Homepage(){
    const [loading, setLoading] = useState(true)


            
    useEffect(()=>{
        setTimeout(() => {
           setLoading(false)
       },4000)
       
   })

 
   
    return(
        <div className="home">
            {loading? (<Loader/>): (
                 <div className="home_container">
                <img
                 className="home_image"
                 alt="Home-Background"
                 src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                 
                />
               {/* Here are the products*/}
                    <Product 
                    />
              
                
              
                  
               
            </div>
            )}
           
        </div>
    )
}
export default Homepage