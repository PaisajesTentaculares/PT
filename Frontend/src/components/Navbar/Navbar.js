import React , { useState }from "react";
import './Navbar.css';
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS} from "react-scroll";
import {FaBars, FaTimes} from 'react-icons/fa';
import {AiOutlineMail} from 'react-icons/ai';
import {NavbarData} from './NavbarData.js'
import { Button,ToggleButtonGroup,ToggleButton } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';





const Navbar = ({toggle}) =>{

    const [click,setClick] = useState(false)

    const handleClick = () => setClick(!click)
    
    
    return (
        
        <nav className="Nav">
            <div className="NavbarContainer">
                <LinkR to='/' className="NavLogoR"> Logo </LinkR>
            
                <div className='NavMenuIcon' onClick={toggle}>  
                    <FaBars />
                </div>
                <ul className='NavMenu'>
                    {NavbarData.map((item,index) => {
                        return(
                        <li key={index} className={item.cName}>
                            <LinkS to={item.path} className='NavLinkS'>
                            {item.title}
                            </LinkS>
                        </li>
                        )})}
                        <li className='NavItem'>
                        <LinkS to='/Contacto' className='NavLinkS'>
                            <AiOutlineMail />
                        </LinkS>
                        </li>
                </ul>
                <div>


                </div>
            </div>
        </nav>
        
    )
}

export default Navbar;