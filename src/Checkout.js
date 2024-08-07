import React from "react"
import "./Checkout.css"
import Subtotal from "./Subtotal"
import CheckoutProduct from "./CheckoutProduct"
import {useStateValue} from './Stateprovider'
function Checkout() {
    const[{cart ,user},dispatch] = useStateValue()

    return(
        <div className="checkout">
            {cart?.length === 0 ? (
               
                <div className="empty">
                  <p className="text">No Item In Cart 🙄</p>
                </div>
                ): (
                <div>
                    <div className="checkout_left">
                        <img 
                          className="checkout_ad"
                          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                          alt=""
                        />
               
                        <div>
                            <h3>Hello, {user.email}</h3>
                            <h2 className="checkout_title">Your Shopping Basket</h2>

                            <CheckoutProduct />
                        </div>
                    </div>
               
                    <div className="checkout_right">
                        <Subtotal />
                    </div>
                </div>
            
            )}
        
        </div>

      
    )
}
export default Checkout
