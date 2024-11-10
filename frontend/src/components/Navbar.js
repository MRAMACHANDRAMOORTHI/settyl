// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{ padding: '10px', backgroundColor: '#4a90e2', color: 'white' }}>
            <Link to="/" style={{ marginRight: '10px', color: 'white', textDecoration: 'none' }}>Home</Link>
            <Link to="/login" style={{ marginRight: '10px', color: 'white', textDecoration: 'none' }}>Login</Link>
            <Link to="/signup" style={{ marginRight: '10px', color: 'white', textDecoration: 'none' }}>Sign Up</Link>
            <Link to="/profile" style={{ color: 'white', textDecoration: 'none' }}>Profile</Link>
        </nav>
    );
};

export default Navbar;
