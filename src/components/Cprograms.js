import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
import './cprograms.css';
import Meterial from './meterial';
import { Codesdata } from './codesdata';

function Cprograming() {
    const [searchC, setSearchC] = useState('');
    let history = useHistory();
    const goToPreviousPath = () => {
        history.goBack();
    };
    return (
        <div className="c">
            <div className="c__nabar__sticky">
                <div className="c__navbar">
                    <div className="c__navbar__left">
                        <button onClick={goToPreviousPath}>
                            <i className="far fa-long-arrow-left"> </i>
                        </button>
                    </div>
                    <div className="c__navbar__search">
                        <div className="navbar__search__input">
                            <input
                                type="text"
                                placeholder="Search your question.."
                                onChange={event => {
                                    setSearchC(event.target.value);
                                    window.scrollTo(0, 0);
                                }}
                            />
                        </div>
                        <div className="navbar__search__i">
                            <i className="far fa-search"> </i>
                        </div>
                    </div>
                </div>
            </div>

            <Meterial
                compiler="https://www.onlinegdb.com/online_c_compiler"
                app="https://developerinsider.co/download-turbo-c-for-windows-7-8-8-1-and-windows-10-32-64-bit-full-screen/"
                name="Turbo C++"
            />

            <div className="c__body__lists">
                {Codesdata.filter(value => {
                    if (value.head === 'C') {
                        if (searchC === '') {
                            return value;
                        } else if (
                            value.question.toLowerCase().includes(searchC.toLowerCase())
                        ) {
                            return value;
                        }
                    }
                }).map((key, val) => {
                    return (
                        <section className="c__body__lists__list">
                            <div className="c__top">
                                <div className="c__head">
                                    <p key={key}>Code: {key.head}</p>
                                </div>
                                <div className="c__question">
                                    <p key={key}>{key.question}</p>
                                </div>
                            </div>
                            <div
                                className="c__programs"
                                dangerouslySetInnerHTML={{ __html: key.coding }}
                            />
                        </section>
                    );
                })}
            </div>
        </div>
    );
}

export default Cprograming;
