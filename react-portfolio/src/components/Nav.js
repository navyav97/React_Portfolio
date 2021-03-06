import React, { Component } from 'react';
import './App.css';
import {Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo2.jpg';
class Navu extends Component {
    render() {
        return (
            <div>
               <Nav className="navbar navbar-expand-sm bg-info navbar-light">
             <a className="navbar-brand" href=" "><img src={logo}/></a>
             <ul className="navbar-nav">
               <li className="nav-item">
                 <a className="nav-link" id="userlogin" href="/login">Login</a>
               </li>
               <li className="nav-item">
                 <a className="nav-link" id="userreg" href="/userreg">Register</a>
               </li>
               <li className="nav-item">
                 <a className="nav-link" id="home" href="/home">Home</a>
               </li>
             </ul>
           </Nav>
           <div className="container">
           <section>
             <h1>
               <span>W</span>
               <span>E</span>
               <span>L</span>
               <span>C</span>
               <span>O</span>
               <span>M</span>
               <span>E</span>
                <br/>
                <span>T</span>
                <span>O</span>
                <br/>
                <span>R</span>
                <span>E</span>
                <span>B</span>
                <span>A</span>
                <span>T</span>
                <span>E</span>
                <span>S</span>&nbsp;
               
               <span>N</span>
               <span>E</span>
               <span>A</span>
               <span>R</span>
               <span>B</span>
               <span>Y</span> 
             </h1>
           </section>
           </div>
           </div>
        )
    }
}

export default Navu
