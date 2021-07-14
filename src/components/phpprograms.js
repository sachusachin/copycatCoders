import React from 'react';
import {useState} from 'react';
import { useHistory } from "react-router-dom";
// import { BrowserRouter as Router } from 'react-router-dom';
import './phpprograms.css';
import {Codesdata} from "./codesdata";
import Meterial from "./meterial";

function Phpprograming() {
    const [searchPhp,setSearchPhp]= useState('');
    let history = useHistory();
    const goToPreviousPath = () => {
        history.goBack()
    }
    return (
        <div className='php'>
            <div className='php__nabar__sticky'>
                <div className='php__navbar'>
                    <div className='php__navbar__left'>
                        <button onClick={goToPreviousPath}>
                            <i className="far fa-long-arrow-left"> </i>
                        </button>
                    </div>
                    <div className='php__navbar__search'>
                        <div className='navbar__search__input'>
                            <input type='text' placeholder='Search your question..'
                                   onChange={
                                       event =>{setSearchPhp(event.target.value);
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
                compiler='https://www.w3schools.com/php/phptryit.asp?filename=tryphp_array_num'
                app='https://www.apachefriends.org/download.html'
                name='Xampp'
            />

            <div className='php__body__lists'>

                {Codesdata.filter((value => {
                    if (value.head==="PHP"){
                        if (searchPhp === ""){
                            return value;
                        }else if (value.question.toLowerCase().includes(searchPhp.toLowerCase())){
                            return value;
                        }
                    }
                })).map((key,val) => {
                    return (
                        <section className='php__body__lists__list'>
                            <div className='php__top'>
                                <div className='php__head'>
                                    <p>Code: {key.head}</p>
                                </div>
                                <div className='php__question'>
                                    <p  key={key}>{key.question}</p>
                                </div>
                            </div>
                            <div className='php__programs'  dangerouslySetInnerHTML={{__html:key.coding}}></div>
                        </section>
                    );
                })}

            </div>
        </div>
    );
}

export default Phpprograming;