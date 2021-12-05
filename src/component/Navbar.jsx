import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from 'react-icons/ai';
import Squares from './Squares';
import '../styles/Navbar.scss';
import { IconContext } from 'react-icons/lib';

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
        <div className="navbar">
            <Link to="#" className="menuBars"></Link>
            <FaIcons.FaBars onClick={showSidebar}/>
        </div>
        <nav className={sidebar ? 'navMenu active' : 'navMenu' }>
           <div className="navbarToggle">
           <Link to="#" className="menuBars"></Link>
           <AiIcons.AiOutlineClose onClick={showSidebar}/>
            <Squares />
            </div>
        </nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar;
