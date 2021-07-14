import React from 'react';
import { Link } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
import './codelist.css';
import c from './img/c.ico';
import cpp from './img/cpp.png';
import java from './img/java.ico';
import php from './img/php.ico';

function Languages() {
    return (
        <div className='language'>
            <div className='header__languages'>
                <div className='header__lang__head'>
                    <p>Choose Your Language</p>
                </div>
                <div className='header__s__lists'>
                    <div className='header__list c'>
                        <div className='h_l_img'>
                            <img src={c} alt='c'/>
                        </div>
                        <div className='h_l_link'>
                            <div className='name'>
                                <p>C Programming</p>
                            </div>
                            <Link to="/c-programming"><p>Go to Code <i className="fal fa-angle-double-right"></i></p></Link>
                        </div>
                    </div>
                    <div className='header__list cpp'>
                        <div className='h_l_img'>
                            <img src={cpp} alt='cpp'/>
                        </div>
                        <div className='h_l_link'>
                            <div className='name'>
                                <p>C++ Programming</p>
                            </div>
                            <Link to="/cpp-programming"><p>Go to Code <i className="fal fa-angle-double-right"></i></p></Link>
                        </div>
                    </div>
                    <div className='header__list java'>
                        <div className='h_l_img'>
                            <img src={java} alt='java'/>
                        </div>
                        <div className='h_l_link'>
                            <div className='name'>
                                <p>Java Programming</p>
                            </div>
                            <Link to="/java-Programming"><p>Go to Code <i className="fal fa-angle-double-right"></i></p></Link>
                        </div>
                    </div>
                    <div className='header__list php'>
                        <div className='h_l_img'>
                            <img src={php} alt='php'/>
                        </div>
                        <div className='h_l_link'>
                            <div className='name'>
                                <p>php Programming</p>
                            </div>
                            <Link to="/php-Programming"><p>Go to Code <i className="fal fa-angle-double-right"></i></p></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Languages;