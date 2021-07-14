import React from 'react';
import { Route,Switch,NavLink } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Home from './Home';
import Code from './Code';
import Package from './Package';
import Contact from './Contact';
import Notfound from './notfound';
import './navbar.css';
import Javaprograming from "./javaprogram";
import Cprograming from "./Cprograms";
import ScrollToTop from "./ScrollToTop";
import Phpprograming from "./phpprograms";
import Cppprograming from "./cppPrograms";

function Navbar() {
    return (
       
           <Router>
               <ScrollToTop />
                <Switch>
                    <Route exact path="/" >
                        <Home />
                    </Route >
                    <Route path="/code" > 
                        <Code /> 
                     </Route>
                     <Route exact path="/package" >
                        <Package />
                    </Route >
                    <Route path="/contact" > 
                        <Contact /> 
                     </Route>
                    <Route path="/java-Programming" >
                        <Javaprograming />
                    </Route>
                    <Route path="/c-programming" >
                        <Cprograming />
                    </Route>
                    <Route path="/php-programming" >
                        <Phpprograming />
                    </Route>
                    <Route path="/cpp-programming" >
                        <Cppprograming />
                    </Route>
                     <Route > 
                        <Notfound /> 
                     </Route>
                </Switch>
                
                <div className="navbar">
                    <NavLink exact activeClassName="active" to="/">
                        <span className="touch"><i class="fal fa-house"></i></span>
                    </NavLink>
                    <NavLink activeClassName="active" to="/code">
                        <span className="touch"><i className="far fa-code"></i></span>
                    </NavLink>
                    <NavLink activeClassName="active" to="/package">
                        <span className="touch"><i class="far fa-folder-download"></i></span>
                    </NavLink>
                    <NavLink activeClassName="active" to="/contact">
                        <span className="touch"><i class="fad fa-paper-plane"></i></span>
                    </NavLink>
                </div>
             </Router>
    );
  }
  
  export default Navbar;