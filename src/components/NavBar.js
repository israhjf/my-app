import React from 'react';
import "./NavBar.css";
import { NavLink } from 'react-router-dom';

function NavBar() {
    return<>
    <nav className='navbar'>
        <div className='nav-container'>
            <NavLink exact to="/" className="nav-logo">
                CodeBucks
            </NavLink>
            <ul>
                <li>
                    <NavLink exact to="/" className="nav-logo">
                        CodeBucks
                    </NavLink>
                </li>
            </ul>
        </div>
    </nav>
    </>
}

export default NavBar;