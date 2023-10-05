import React from "react";
import  './navbar.css'

import logo from "../../assets/logo.png"
import github from '../../assets/pngwing.com (12).png'
import linkedin from '../../assets/pngwing.com (7).png'
import X from '../../assets/pngwing.com (6).png'


const Navbar=()=>{
    return (
    <nav className="navbar">
        <img src={logo} alt="Logo" className="logo"/>
        <div className="socialHandles">
        {/* <Link  className="socialHandlesLink">Linkedin</Link>
        <Link className="socialHandlesLink">Twitter</Link>
        <Link className="socialHandlesLink">Github</Link> */}
        <img src={linkedin} alt="" className="socialHandlesLink" />
        <img src={X} alt="" className="socialHandlesLink" />
        <img src={github} alt="" className="socialHandlesLink" />
        </div>
    </nav>
    )
}

export default Navbar