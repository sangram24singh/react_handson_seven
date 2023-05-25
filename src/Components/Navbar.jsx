import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
        <div className='Nav-header'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/student'>Student</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
        </div>
        
        </>
    );
}

export default Navbar;