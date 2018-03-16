import React from 'react';
import {  BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const Header = (props) => (
    <div id="header">
      <div id="title_block">
        <a href="index.html">[PICTURE]</a>
        <h1 id="title"> WebMD </h1>
      </div>
      <div id="header_login">
        {(props.isConnected ? <div><a>Profile</a> <a> Sign Out</a></div> : <Link to="/login">log in </Link>)}
      </div>
    </div>
);

export default Header;