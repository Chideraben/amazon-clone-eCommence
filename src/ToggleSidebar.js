import {FaXmark} from 'react-icons/fa6'
import { FaBars } from "react-icons/fa6"
import { useState } from 'react';
import './ToggleSidebar.css'
import {Link} from 'react-router-dom'
function ToggleSidebar(){
    const [isOpen , setIsOpen] = useState(false);
    
    const HandleToggle = ()=> {
       // isOpen === true ? setIsOpen(false) : 
        //setIsOpen(true)
        setIsOpen(!isOpen)
    }
    return(
          
        <div className='old_container'>
            <div >
                <button onClick={HandleToggle}>
                 <FaBars className="toggle"/>
                </button>
            </div>
           
            <div   className={`sidebar ${isOpen ?  'active' : 'non-active'}`} >
                <div className='cancel'>
                    <button onClick={HandleToggle}>
                        <FaXmark className="toggle" />
                    </button>
                    
                </div>
                <div className='buttons'>

                   
                    <Link to="/errorpage" className='side-btn'><button className='side-btn'>Deals</button></Link>
                    <Link to="/errorpage" className='side-btn'> <button className='side-btn'>Amazon Basics</button></Link>
                    <Link to="/errorpage" className='side-btn'> <button className='side-btn'>Best Seller</button></Link>
                    <Link to="/errorpage" className='side-btn'> <button className='side-btn'>Livestreams</button></Link>
                    <Link to="/errorpage" className='side-btn'> <button className='side-btn'>Music</button></Link>
                    <Link to="/errorpage" className='side-btn'> <button className='side-btn'>Vedio</button></Link>
                    <Link to="/errorpage" className='side-btn'> <button className='side-btn'>New Releases</button></Link>       
                    <Link to="/errorpage" className='side-btn'> <button className='side-btn'>Book</button></Link>
                    <Link to="/errorpage" className='side-btn'> <button className='side-btn'>Home</button></Link>
                    <Link to="/errorpage" className='side-btn'> <button className='side-btn'>Health & Household</button></Link>
                    <Link to="/errorpage" className='side-btn'> <button className='side-btn'>PC</button></Link>
                </div>
               
            </div>
        </div>

    )
}
export default ToggleSidebar