import './NavBar.css';
import Hamburger from 'hamburger-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const NavBar = () => {
    const [hambuggerIsOpen, setHambuggerIsOpen] = useState(false);


    return (
        <header className={`header-bar ${hambuggerIsOpen ? "add-header-style": ""}`}>
            <div className="top-bar">

            <h1>APRIL <span>GROUP</span></h1>
                
            <div className="hambugger">
            <Hamburger toggled={hambuggerIsOpen} toggle={setHambuggerIsOpen} aria-label="Toggle Menu" className="Hambugger"/>
            </div>
            </div>
            <nav className={`nav-bar ${hambuggerIsOpen ? 'open': ""}`}>
            <Link to="/properties"className='link'>PROPERTIES</Link>
            <Link to="/investors" className='link'>INVESTORS</Link>
            <Link to="/about"className='link'>ABOUT</Link>
            <Link to="/contact"className='link'>CONTACT</Link>
            <Link to="/available-space"className='link'>AVAILABLE SPACE</Link>
            <hr />
            <Link to="/login"className='link'>LOGIN</Link>
            <Link to="/investor"className='link'>INVESTOR</Link>
            <div className="nav-footer-bar">
            <Link to="/terms" className='link'>TERMS</Link>
            <Link to="/privacy" className='link'>PRIVACY</Link>
            </div>
            </nav>
        </header>
    );
};

export default NavBar;
