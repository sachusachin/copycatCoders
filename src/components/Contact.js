import React from 'react';
import { useHistory } from 'react-router-dom';
import emailjs from 'emailjs-com';
import swal from 'sweetalert';
// import { BrowserRouter as Router } from 'react-router-dom'; 
import './contact.css';
import '../index.css';

export function Contact() {
      let history = useHistory();
      const goToPreviousPath = () => {
          history.goBack()
      }
      function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_qss3vjs', 'template_42dqzcv', e.target, 'user_0fc7zTxsBJwrh8oZP0dzk')
          .then((result) => {
              console.log(result.text);
              swal('Thanks!', 'We got your response!', 'success');
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      }
    return (
       <div className='contact'>
           <div className='code__head__sticky'>
               <div className='c-top'>
                   <div className='c-t-left'>
                       <button onClick={goToPreviousPath}>
                           <i className="far fa-long-arrow-left"></i>
                       </button>
                   </div>
               </div>
           </div>
            <div className='n-body'>
                <div className='n-b-about'>
                    <div className='n-b-about-top'>
                        <p>Send us your feedback!.</p>
                    </div>
                    <div className='n-b-about-bottom'>
                        <p>Do you have a suggestion or found bug?</p>
                        <p>let us know in the field below.</p>
                    </div>
                </div>
                <div className='n-mail-form'>
                    <form onSubmit={sendEmail} className='form' autoComplete='off'>
                       <div className='n-m name'>
                        <input 
                            type='text' 
                            name='name' 
                            id='name' 
                            placeholder='Enter your Name..'
                            autoComplete='off'
                            required
                            />
                       </div>
                       <div className='n-m mail'>
                        <input 
                            type='email' 
                            name='user-email' 
                            id='user-email' 
                            placeholder='Enter your Email..'
                            autoComplete='off'
                            required
                            />
                       </div>
                       <div className='n-m message'>
                        <textarea
                            type='text' 
                            name='message' 
                            id='message' 
                            placeholder='Enter your Suggestions...'
                            autoComplete='off'
                            required
                            rows='4'  ></textarea>
                       </div>
                       <div className='n-m submit'>
                            <div className='submit'>
                                <input 
                                type='submit' 
                                name='submit' 
                                id='submit' 
                                value='Send'
                                required
                                />
                                <i class="fad fa-paper-plane"></i>
                            </div>
                       </div>
                    </form>
                </div>
                <div className="footer">
                    <div className="f-top f-bold">
                        <span>by</span>
                    </div>
                    <div className="f-bottom">
                        <ul className="nav">
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="https://twitter.com/hh64285092"
                                    title="Twitter"
                                    target="_blank"
                                >
                                    <i className="fab fa-twitter"/>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" title="Facebook" target="_blank">
                                    <i className="fab fa-facebook"/>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="https://www.instagram.com/_mad_ness_sachu_/"
                                    title="Instagram"
                                    target="_blank"
                                >
                                    <i className="fab fa-instagram"/>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="https://github.com/sachusachin"
                                    title="Github"
                                    target="_blank"
                                >
                                    <i className="fab fa-github"/>
                                    <span className="menu-title sr-only">Github</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="copy-right">
                        <p>
                            © Right Website. All rights reserved. Design
                            <span> Amarnath</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Contact;