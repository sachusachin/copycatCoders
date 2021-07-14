import React from 'react';
import {useState} from 'react';
import {Link, useHistory } from "react-router-dom";
// import { BrowserRouter as Router } from 'react-router-dom'; 
import './code.css';
import {Codesdata} from "./codesdata";

function Code() {
    const [searchText,setSearchText]= useState('');
    let history = useHistory();
    const goToPreviousPath = () => {
        history.goBack()
    }
    return (
       <div className='code'>
         <div className='code__nabar__sticky'>
             <div className='code__navbar'>
                 <div className='code__navbar__left'>
                     <button onClick={goToPreviousPath}>
                         <i className="far fa-long-arrow-left"> </i>
                     </button>
                 </div>
                 <div className='code__navbar__search'>
                     <div className='navbar__search__input'>
                         <input type='text' placeholder='Search your question..'
                                onChange={
                                    event =>{setSearchText(event.target.value);
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
         <div className='code__body__lists'>

                         {Codesdata.filter((value => {
                             if (searchText === ""){
                                 return value;
                             }else if (value.question.toLowerCase().includes(searchText.toLowerCase())){
                                 return value;
                             }
                         })).map((key,val) => {
                             return (
                                     <section className='code__body__lists__list'>
                                         <div className='code__top'>
                                             <div className='code__head'>
                                                 <p>Code : {key.head}</p>
                                             </div>
                                             <div className='code__question'>
                                                 <p  key={key}>{key.question}</p>
                                             </div>
                                         </div>
                                         <div className='code__programs'  dangerouslySetInnerHTML={{__html:key.coding}}></div>
                                     </section>
                             );
                         })}

         </div>
       </div>
    );
}
  
  export default Code;