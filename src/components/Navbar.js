import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <Link className="nav-link" to="/firmware">Firmware</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/">Logout</Link>
            </li>
        </ul>
    </nav>
  );
}

export default Navbar;
