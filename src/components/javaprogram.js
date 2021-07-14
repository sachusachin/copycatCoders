import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
import './javaprograms.css';
import { Codesdata } from './codesdata';
import Meterial from './meterial';

function Javaprograming() {
    const [searchJava, setSearchJava] = useState('');
    let history = useHistory();
    const goToPreviousPath = () => {
        history.goBack();
    };
    return (
        <div className="java">
            <div className="java__nabar__sticky">
                <div className="java__navbar">
                    <div className="java__navbar__left">
                        <button onClick={goToPreviousPath}>
                            <i className="far fa-long-arrow-left"> </i>
                        </button>
                    </div>
                    <div className="java__navbar__search">
                        <div className="navbar__search__input">
                            <input
                                type="text"
                                placeholder="Search your question.."
                                onChange={event => {
                                    setSearchJava(event.target.value);
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
                compiler="https://www.jdoodle.com/online-java-compiler/"
                app="https://www.oracle.com/in/java/technologies/javase/javase-jdk8-downloads.html"
                name="Java 8"
            />

            <div className="java__body__lists">
                {Codesdata.filter(value => {
                    if (value.head === 'Java') {
                        if (searchJava === '') {
                            return value;
                        } else if (
                            value.question.toLowerCase().includes(searchJava.toLowerCase())
                        ) {
                            return value;
                        }
                    }
                }).map((key, val) => {
                    return (
                        <section className="java__body__lists__list">
                            <div className="java__top">
                                <div className="java__head">
                                    <p>Code: {key.head}</p>
                                </div>
                                <div className="java__question">
                                    <p key={key}>{key.question}</p>
                                </div>
                            </div>
                            <div
                                className="java__programs"
                                dangerouslySetInnerHTML={{ __html: key.coding }}
                            />
                        </section>
                    );
                })}
            </div>
        </div>
    );
}

export default Javaprograming;
