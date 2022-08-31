import React from 'react'
import { CartWidget } from '../components/CartWidget';

function NavBar() {
    return (

        <nav className="NavBar">
            <ul className="">
                <a href="#">
                    <li className="">All Products</li>
                </a>
                <a href="#">
                    <li className="">Sofas</li>
                </a>
                <a href="#">
                    <li className="">Tables</li>
                </a>
            </ul>
            <CartWidget />
        </nav>

    )
}

export default NavBar