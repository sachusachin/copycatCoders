import React from 'react';
// import { Link } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Languages from "./Codelist";

import './home.css';
import '../index.css';
// import Navbar from '../navbarContainer/navbar';
import coder from './img/coder.png';


function Home() {
  return (
     <div>
         <Header />
         <div className='header__top'>
             <div className='header__head'>
                 <p className='header__head__p1'>Learn to Code <br/>for Free</p>
                 <p className='header__head__p2'>Learn to code with our beginner-friendly codes. Read programs,
                     write programs, and learn to code.Lets crack your school/college practicals..</p>
             </div>
             <div className='header__image'>
                 <img src={coder} alt='coder'/>
             </div>
         </div>
         <Languages />
     </div>
  );
}

export default Home;