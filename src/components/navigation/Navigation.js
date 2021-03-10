import React from 'react';
import { Link } from 'react-router-dom';
export default function Navigation() {
    return (
        <nav className="nav">
            <h1>Logo</h1>

            <ul className="nav__links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About Us</Link>
                </li>
                <li>
                    <Link to="/contact">Contact Us</Link>
                </li>
            </ul>

            <ul className="nav__auth">
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/signup">Sign Up</Link>
                </li>
            </ul>
        </nav>
    );
}
