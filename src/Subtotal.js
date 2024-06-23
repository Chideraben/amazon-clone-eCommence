import React from "react";
import { useStateValue} from "./Stateprovider"
import "./Subtotal.css"
import { getBasketTotal } from "./reducer";
import {Link } from 'react-router-dom'
import  { NumberFormatBase } from 'react-number-format'
function Subtotal() {
    const [{basket}, dispatch] = useStateValue();

    return(
        <div className="subtotal">
            <NumberFormatBase
            renderText = {(value) => (
                <>
                <p>
                    subtotal ({basket?.length} items) : <strong>{value}</strong>

                </p>
                <small className="subtotal_gift">
                    <input type="checkbox" />This order contains a gift
                </small>
                </>
            )}

            decimalScale={2}
            value={getBasketTotal(basket)} 
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            />

            <button>
                <Link to="/errorpage">
                    Proceed to Checkout
                </Link>
            </button>
        </div>
    )
}
export default Subtotal