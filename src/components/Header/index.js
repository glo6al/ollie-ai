import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { slide as Menu } from 'react-burger-menu';


function Header(){
    return(
        <header className='header-class d-flex'>
            <Menu>
            <a id="home" className="menu-item" href="/">Home</a>
            <a id="about" className="menu-item" href="/about">About</a>
            <a id="contact" className="menu-item" href="/contact">Contact</a>
            </Menu>
            <FontAwesomeIcon icon={faUserPlus} id='icon' className='justify-self-end'/>
        </header>
    )
}

export default Header;