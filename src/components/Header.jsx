import React from 'react'
import Logo from "../assets/images/Logo.png";
import { NavLink } from 'react-router-dom';

export const Header = () => {
    return (
        <header>
            <div className="Container_logo">
                <NavLink to='/'><img src={Logo} alt="Moderna Logo" className="Logo" /></NavLink>
            </div>
            <div className="Container_BrandName">
                <p className="BrandName">moderna</p>
                <p className="Brand_Subtitle">furniture store</p>
            </div>
        </header>
    )
}

