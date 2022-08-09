import React from "react";
import Logo from "../assets/images/Logo.png";
import {CartWidget} from '../components/CartWidget';

export const NavBar = () => {
    return (
        <nav className="NavBar">
            <a href="#"><img src={Logo} alt="Moderna Logo" className="Logo" /></a>
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