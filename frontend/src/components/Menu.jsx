import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`navbar custom-navbar fixed-top navbar-expand-lg ${isOpen ? 'open' : ''}`}>
            <div className="container">
                <div className="navbar-header">
                    <button className="navbar-toggler" type="button" onClick={toggleMenu} aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/*  LOGO TEXT HERE */}
                    <NavLink to="/" className="navbar-brand">Dépôt Car</NavLink>
                </div>
                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
                    <ul className="nav navbar-nav navbar-nav-first">
                        <li className="nav-item">
                            <NavLink
                                to="/"
                                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                            >
                                Accueil
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/cars"
                                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                            >
                                Notre offre
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/about-us"
                                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                            >
                                A propos de nous
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/contact-us"
                                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                            >
                                Contactez-nous
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Menu;
