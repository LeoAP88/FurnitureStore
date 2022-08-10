import React from "react";
import Logo from "../assets/images/Logo.png";
import { CartWidget } from '../components/CartWidget';

export const NavBar = () => {
    return (
        <nav className="NavBar">
            <div className="Container_logo">
                <a href="#"><img src={Logo} alt="Moderna Logo" className="Logo" /></a>
                <div className="Container_BrandName">
                    <p className="BrandName">MODERNA</p>
                    <p className="Brand_Subtitle">FURNITURE STORE</p>
                </div>
            </div>
            <ul className="">
                <a href="#">
                    <li className="">LIVING ROOM</li>
                </a>
                <a href="#">
                    <li className="">BEDROOM</li>
                </a>
                <a href="#">
                    <li className="">DINING ROOM</li>
                </a>
            </ul>
            <CartWidget />
        </nav>
    )
}