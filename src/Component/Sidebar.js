import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";

function Sidebar({ collapse, setCollapse }) {

    return (
        <>
            <div className='navbar'>
                <AiOutlineMenu onClick={() => setCollapse(!collapse)} style={{marginLeft:'2rem', fontSize:'2rem',background:'none', color:'white'}} />
            </div>
            <nav className= {collapse ? "sidebar" : "sidebar-uncollapse"} style={collapse ? { display: "none" } : {}}>
                <ul className='navbar-menu'>
                    <li> <AiFillHome/> Danko</li>
                    <li> <AiFillHome/> Danko</li>
                    <li> <AiFillHome/> Danko</li>
                    <li> <AiFillHome/> Danko</li>
                    <li> <AiFillHome/> Danko</li>
                </ul>
            </nav>


        </>
    )
}

export default Sidebar
