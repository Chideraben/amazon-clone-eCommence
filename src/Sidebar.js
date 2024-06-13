import './Sidebar.css'
import {Link} from 'react-router-dom'
import ToggleSidebar from "./ToggleSidebar"
function Sidebar(){
    
    return(
        
            <div className="container">
                <div className="child_container" >
               
                    <button>Deals</button>
                    <button>AmazonBasics</button>
                    <button>BestSeller</button>
                    <button>Livestreams</button>
                    <button>Music</button>
                    <button>Vedio</button>
                    <button>NewReleases</button>
                    <button>Book</button>
                    <button>Home</button>
                    <button>Health&Household</button>
                    <button>PC</button>
                </div>
                 
            </div>
           
       
    )
}
export default Sidebar