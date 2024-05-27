import './NavBar.css';
import Hamburger from 'hamburger-react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="nav-bar">
            <h1>APRIL <span>GROUP</span></h1>
            <Link to="/properties">PROPERTIES</Link>
            <Link to="/investors">INVESTORS</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/contact">CONTACT</Link>
            <Link to="/available-space">AVAILABLE SPACE</Link>
            <hr />
            <Link to="/login">LOGIN</Link>
            <Link to="/investor">INVESTOR</Link>
            <Hamburger />
        </nav>
    );
};

export default NavBar;
