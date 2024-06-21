import {FaXmark} from 'react-icons/fa6'
import { FaBars } from "react-icons/fa6"
import { useState } from 'react';
import './ToggleSidebar.css'
import {Link} from 'react-router-dom'
import {IoIosHome} from 'react-icons/io'
import {MdLightMode} from 'react-icons/md'
import {FaFirstOrderAlt} from 'react-icons/fa'
import {CgProfile} from 'react-icons/cg'
import {MdContactMail} from 'react-icons/md'
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
               
                 <FaBars className="toggle"  onClick={HandleToggle}/>
               
            </div>
           
            <div   className={`sidebar ${isOpen ?  'active' : 'non-active'}`} >
                <div className='cancel'>
                   
                        <FaXmark className="toggle"  onClick={HandleToggle} />
                    
                    
                </div>
                <div className='buttons'>

                   
                    <Link to="/errorpage" ><IoIosHome/> <button className='side-btn'>Home</button></Link>
                    <Link to="/errorpage"><MdLightMode/> <button className='side-btn'>Theme</button></Link>
                    <Link to="/errorpage"> <FaFirstOrderAlt/> <button className='side-btn'>Orders</button></Link>
                    <Link to="/errorpage"> <CgProfile/> <button className='side-btn'>Profile</button></Link>
                    <Link to="/errorpage"> <MdContactMail/> <button className='side-btn'>Contact-Us</button></Link>
                  
                </div>
               
            </div>
        </div>

    )
}
export default ToggleSidebar