import React from 'react';
import { NavLink } from 'react-router-dom';


export default function NavBar() {

    return (
        <>
            <nav>
                <ul className="navbar-title">
                    <li><NavLink to="/" className="nav-item" activeClassName="active" exact>Home</NavLink></li>
                    <li><NavLink to="/resume" className="nav-item" activeClassName="active" exact>Resume</NavLink></li>
                </ul>
            </nav>
        </>
    );
}