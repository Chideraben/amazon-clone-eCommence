import React from "react"
import "./homepage.css"
import Product from"./Product"
function Homepage(){
    return(
        <div className="home">
            
            <div className="home_container">
                <img
                 className="home_image"
                 alt="Home-Background"
                 src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                 
                />
               {/* Here are the products*/}
                <div className="home_row">
                    <Product
                        id="1"
                        title="Razer BlackShark V2 X Gaming Headset: 7.1 Surround Sound - 50mm Drivers - Memory Foam Cushion - for PC, Mac, PS4, PS5, Switch - 3.5mm Audio Jack - White"
                        price={11.96}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/71MGiPTwXAL._AC_UY218_.jpg"
                    />
                    <Product
                        id="2"
                        title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                        price={239.0}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                    />
                    <Product
                        id="11"
                        title="Mfacoy 6 Pack Soy Sauce Dishes, 3 oz Ceramic Dipping Bowls, Pinch Bowls, Small Dip Bowls Set, Sauce Dish Bowls, Mini Bowl for Side Dish, Ketchup, Soy, BBQ,..."
                        price={39.0}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/71WCy3oGfQL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
                    />
                

                
                    <Product
                        id="3"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                        price={199.99}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    />
                    <Product
                        id="4"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        rating={5}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    />
                    <Product 
                         id="5"
                         title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                         price={598.99}
                         rating={4}
                         image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    />
                   
                
               
               
                    <Product
                        id="6"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={1094.98}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    />
                     <Product
                        id="7"
                        title="Ring Doorbells, Camera, Alarms"
                        price={204.98}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/21DXN9ORm2L._AC_UF226,226_FMjpg_.jpg"
                    />
                    
               

                
                    <Product
                        id="8"
                        title="Blink Smart Home Security Smart Doorbell and Camera Beats Headphones,EarBuds and Applecare "
                        price={1200.98}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/31DLcqobj1L._AC_UF226,226_FMjpg_.jpg"
                    />
                    <Product
                        id="9"
                        title="Beats Headphones,EarBuds and Applecare Blink Smart Home Security Smart Doorbell and Camera"
                        price={20.98}
                        rating={2}
                        image="https://m.media-amazon.com/images/I/51SfrdvcpQL._AC_UF226,226_FMjpg_.jpg"
                    />
                    <Product
                        id="10"
                        title="Amazon Fire TV Stick, HD, sharp picture quality, fast streaming, free & live TV, Alexa Voice Remote with TV controls"
                        price={204.98}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/71Wt1thqZEL._AC_SY300_SX300_.jpg"
                    />
                </div>
            </div>
        </div>
    )
}
export default Homepage