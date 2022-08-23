import React from "react";
import Logo from "../assets/images/Logo.png";
import { CartWidget } from '../components/CartWidget';

export const NavBar = () => {
    return (
        <nav className="NavBar">
            <div className="Container_logo">
                <a href="#"><img src={Logo} alt="Moderna Logo" className="Logo" /></a>
                <div className="Container_BrandName">
                    <p className="BrandName">moderna</p>
                    <p className="Brand_Subtitle">furniture store</p>
                </div>
            </div>
            <ul className="">
                <a href="#">
                    <li className="">living room</li>
                </a>
                <a href="#">
                    <li className="">bedroom</li>
                </a>
                <a href="#">
                    <li className="">dining room</li>
                </a>
            </ul>
            <CartWidget />
        </nav>
    )
}