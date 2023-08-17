import React from "react"
import './Navbar.css'

function Navbar(){
    return  <div>
        <nav>
            <ul className="navlist" >
            <li><a href="#" style={{color:"black"}}>Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contacts</a></li>

            </ul>
        </nav>
    </div>
}

export default Navbar