import React from 'react';
import "./NavBar.css";
import { NavLink } from 'react-router-dom';

function NavBar() {
    return<>
    <nav className='navbar'>
        <div className='nav-container'>
            <NavLink exact to="/" className="nav-links">
                Home
            </NavLink>
            <ul>
                <li>
                    <NavLink exact to="/altiplano" className="nav-links">
                        Altiplano
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/valles" className="nav-links">
                        Valles
                    </NavLink>
                </li>
            </ul>
        </div>
    </nav>
    </>
}

export default NavBar;