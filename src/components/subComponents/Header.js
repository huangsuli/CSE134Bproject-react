import React from 'react';
import {  BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

const Header = (props) => (
    <div id="header">
      <div id="title_block">
      
        <Link to="/"><img src={require('./../../styles/Pictures/male_doctor.png')} alt="" id="doc_pic"/></Link>
        <h1 id="title"> WebMD </h1>
      </div>
      <div id="header_login">
        {(props.isConnected ? <div><a>Profile</a> <a> Sign Out</a></div> : <Link to="/Login"> log in </Link>)}
      </div>
    </div>
);

export default Header;