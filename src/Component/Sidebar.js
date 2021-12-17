import React from 'react'
import { AiFillHome } from "react-icons/ai";

function Sidebar({ collapse, setCollapse }) {

    return (
        <>
            <nav className= {collapse ? "sidebar" : "sidebar-uncollapse"} style={collapse ? { display: "none" } : {}}>
                <ul className='navbar-menu'>
                    <li> <AiFillHome/> item</li>
                    <li> <AiFillHome/> item</li>
                    <li> <AiFillHome/> item</li>
                    <li> <AiFillHome/> item</li>
                    <li> <AiFillHome/> item</li>
                </ul>
            </nav>

        </>
    )
}

export default Sidebar
