import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import {AiOutlineMail} from 'react-icons/ai';
//import {Button} from './Button';
import { Button } from '@mui/material';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';
import { MdFingerprint } from 'react-icons/md';
import { NavbarData } from './NavbarData';
import Logo from './LogoApp.png';


function Navbar() {
    const [click,setClick] = useState(false)
    const [button,setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if (window.innerWidth<960){
            setButton(false)
        } else {
            setButton(true)
        }
    } 
    window.addEventListener('resize',showButton)

    return (

            <nav className='navbar'>
              <div className='navbar-container container'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
               
                  <img src={Logo} className='navbar-img'/>
                
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                  {click ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  {NavbarData.map((item,index) => {
                    return(
                      <li key={index} className={item.cName}>
                        <Link to={item.path} className='nav-links' onClick={closeMobileMenu}>
                           {item.title}
                        </Link>
                      </li>
                    )})}
                      <li className='nav-item'>
                      <Link to='/Contacto' className='nav-links' onClick={closeMobileMenu}>
                         <AiOutlineMail />
                      </Link>
                    </li>
                </ul>
                <div className='navbar-container-languaje'>
                <Button sx={{borderRadius:50, color: '#5a5936', justify: "flex-end" }}>
                ESP
                </Button>
                <Button sx={{ borderRadius:50, color: '#5a5936', justify: "flex-end" }}>
                ENG
                </Button>
                </div>
              </div>
            </nav>
      );
    }
    
    export default Navbar;

    