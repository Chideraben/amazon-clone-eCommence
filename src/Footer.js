import './Footer.css'
import React from 'react'
import { Link } from 'react-router-dom'
function LastNav(){
    return(
        <div className="main_container">
            <div className="ist_container">
                <section className='details'>
                    <Link to="/errorpage">Amazon.com</Link>
                    <Link to="/errorpage">Your Lists</Link>
                   
                    <Link to="/errorpage">Browsing History</Link>
                    <Link to="/errorpage">Returns</Link>
                </section>
                <section className='details'>
                <Link to="/errorpage">Your Orders</Link>
                <Link to="/errorpage">Gift Cards</Link>
                <Link to="/errorpage">Your Account</Link>
                <Link to="/errorpage">Customer Service</Link>
                </section>
            </div>

        </div>
    )
}
export default LastNav