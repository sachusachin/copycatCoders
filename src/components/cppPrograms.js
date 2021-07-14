import React from 'react';
import {useState} from 'react';
import { useHistory } from "react-router-dom";
// import { BrowserRouter as Router } from 'react-router-dom';
import './cppPrograms.css';
import {Codesdata} from "./codesdata";
import Meterial from "./meterial";

function Cppprograming() {
    const [searchCpp,setSearchCpp]= useState('');
    let history = useHistory();
    const goToPreviousPath = () => {
        history.goBack()
    }
    return (
        <div className='cpp'>
            <div className='cpp__nabar__sticky'>
                <div className='cpp__navbar'>
                    <div className='cpp__navbar__left'>
                        <button onClick={goToPreviousPath}>
                            <i className="far fa-long-arrow-left"> </i>
                        </button>
                    </div>
                    <div className='cpp__navbar__search'>
                        <div className='navbar__search__input'>
                            <input type='text' placeholder='Search your question..'
                                   onChange={
                                       event =>{setSearchCpp(event.target.value);
                                           window.scrollTo(0, 0);
                                       }
                                   }/>
                        </div>
                        <div className='navbar__search__i'>
                            <i className="far fa-search"> </i>
                        </div>
                    </div>
                </div>
            </div>

            <Meterial
                compiler='https://www.jdoodle.com/online-c++-compiler/'
                app='https://developerinsider.co/download-turbo-c-for-windows-7-8-8-1-and-windows-10-32-64-bit-full-screen/'
                name='Turbo C++'
            />

            <div className='cpp__body__lists'>

                {Codesdata.filter((value => {
                    if (value.head==="CPP"){
                        if (searchCpp === ""){
                            return value;
                        }else if (value.question.toLowerCase().includes(searchCpp.toLowerCase())){
                            return value;
                        }
                    }
                })).map((key,val) => {
                    return (
                        <section className='cpp__body__lists__list'>
                            <div className='cpp__top'>
                                <div className='cpp__head'>
                                    <p>Code: {key.head}</p>
                                </div>
                                <div className='cpp__question'>
                                    <p  key={key}>{key.question}</p>
                                </div>
                            </div>
                            <div className='cpp__programs'  dangerouslySetInnerHTML={{__html:key.coding}}></div>
                        </section>
                    );
                })}

            </div>
        </div>
    );
}

export default Cppprograming;