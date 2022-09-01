import React from 'react'
import { CartWidget } from './CartWidget';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (

        <nav className="NavBar">
            <ul className="">
                <li>
                    <NavLink to='/FurnitureStore/'>
                        All Products
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/category/table'>
                        Tables
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/category/sofa'>
                        Sofas
                    </NavLink>
                </li>
            </ul>
            <CartWidget />
        </nav>

    )
}