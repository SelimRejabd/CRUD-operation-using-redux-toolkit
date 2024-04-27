import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
       <nav className='flex align-center'>
        <Link to='/' className="nav-link">
            Home
        </Link>
        <Link to='/show-books' className="nav-link">
            SHow Books
        </Link>
        <Link to='/add-book' className="nav-link">
            Add Books
        </Link>
       </nav>
    );
};

export default Navbar;