import React from 'react';
import {  BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const Footer = () => (
    <div id="footer">
      <div id="footer_left">
        &copy; WebMD LLC. All rights reserved 2018.
      </div>
      <div id="footer_right">
        <Link to="/About_us">About us</Link>
        <Link to="/Contact_us">Contact us</Link>
      </div>
    </div>
);

export default Footer;