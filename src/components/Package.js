import React from 'react';
import './package.css';
import amar from './img/amar.jpg';
import { Codesdata } from './codesdata';
import {useHistory} from "react-router-dom";

function Package() {
    const stylediv = {
        color: 'black',
        fontSize: 80,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'spaceAround',
        flexDirection: 'column',
        height: '80vh'
    };
    let history = useHistory();
    const goToPreviousPath = () => {
        history.goBack()
    }
    return (

        <div className='package'>
            <div className='code__head__sticky'>
                <div className='c-top'>
                    <div className='c-t-left'>
                        <button onClick={goToPreviousPath}>
                            <i className="far fa-long-arrow-left"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className='package__card'>
                <div className='package__card__top'>
                    <div className='profile'>
                        <img src={amar}  alt='amar'/>
                    </div>
                </div>
                <div className='package__card__bottom'>
                      <div className='user__name'>
                         <p className='user__name__name'>Amernath</p>
                          <p className='user__name__work'>Web Developer</p>
                      </div>
                    <div className='user__des'>
                        <p>If you're already a front-end developer, well, pretend you're also wearing a pirate hat.</p>
                    </div>
                    <div className='user__social'>
                        <div className="f-bottom">
                            <ul className="nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#" title="Facebook" target="_blank">
                                        <i className="fab fa-facebook"/>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        href="#"
                                        title="Instagram"
                                        target="_blank"
                                    >
                                        <i className="fab fa-instagram"/>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        href="#"
                                        title="Github"
                                        target="_blank"
                                    >
                                        <i className="fab fa-github"/>
                                        <span className="menu-title sr-only">Github</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='number'>
                        <p>7339045267</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Package;
