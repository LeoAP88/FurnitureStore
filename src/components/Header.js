import React from 'react'
import Logo from "../assets/images/Logo.png";

function Header() {
    return (
        <header>
            <div className="Container_logo">
                <a href="#"><img src={Logo} alt="Moderna Logo" className="Logo" /></a>
            </div>
            <div className="Container_BrandName">
                <p className="BrandName">moderna</p>
                <p className="Brand_Subtitle">furniture store</p>
            </div>
        </header>
    )
}

export default Header