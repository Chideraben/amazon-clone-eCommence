import './Sidebar.css'
import React, {useRef} from 'react'

function Sidebar(){
           

    return(
        
            <div className="container">
                <div className="child_container"  >
                   
                    <div className='menu-item'>Deals</div>
                    <div className='menu-item'>AmazonBasics</div>
                    <div className='menu-item'>BestSeller</div>

                    <div className='menu-item'>Livestreams</div>
                    <div className='menu-item'>Music</div>
                    <div className='menu-item'>Vedio</div>
                    <div className='menu-item'>NewReleases</div>
                    <div className='menu-item'>Book</div>
                    <div className='menu-item'>Home</div>
                    <div className='menu-item'>Health&Household</div>
                    <div className='menu-item'>PC</div>
                </div>
                 
            </div>
           
       
    )
}
export default Sidebar