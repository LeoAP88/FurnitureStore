import React from 'react'
import { CartWidget } from '../components/CartWidget';

function NavBar() {
    return (

        <nav className="NavBar">
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

export default NavBar