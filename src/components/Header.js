import React from 'react';
// import { Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './header.css';
import '../index.css';
import logo from './img/logo.ico';

function Header() {
    return (
        <Router>
            <div className='header__sticky'>
                <div className='header'>
                    <div className='h-logo'>
                        <img src={logo} alt='logo' />
                    </div>

                    <div className='h-title'>
                        <p>Copy<span>cat</span> Coders</p>
                    </div>
                </div>
            </div>
      </Router>
    );
  }
  
  export default Header;
