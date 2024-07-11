import React from "react";
import { useStateValue} from "./Stateprovider"
import "./Subtotal.css"
import { getBasketTotal, getCartTotal } from "./reducer";
import {Link } from 'react-router-dom'
import  { NumberFormatBase } from 'react-number-format'
function Subtotal() {
    const [{cart}, dispatch] = useStateValue();

    const getCartTotal = () => {
        return cart.reduce((amount, item)=> item.price * item.quantity + amount, 0).toFixed(2)
    }
    return(
        <div className="subtotal">
            
                <>
                    <p>
                        subtotal ({cart.length} items) : ${getCartTotal()}

                    </p>
                    <small className="subtotal_gift">
                        <input type="checkbox" />This order contains a gift
                    </small>
                </>

          

            <button>
                <Link to="/errorpage">
                    Proceed to Checkout
                </Link>
            </button>
        </div>
    )
}
export default Subtotal
