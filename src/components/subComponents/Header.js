import React from 'react';
import {  BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import DB_Adapter from '../Redux/ReduxDBAdapter';

let profileLink = "/";

function reset() {
  console.log("we are now here");
  profileLink = DB_Adapter.getConnectedUser().isDoctor ? "/doctor_profile" : "/patient_profile";
  console.log(profileLink);
}

function signoutHandler() {
  DB_Adapter.setIsConnected(false);
  DB_Adapter.setId(-2);
}

const Header = (props) => (
    <div id="header">
      <div id="title_block">
      
        <Link to="/"><img src={require('./../../styles/Pictures/male_doctor.png')} alt="" id="doc_pic"/></Link>
        <h1 id="title"> WebMD </h1>
      </div>
      <div id="header_login">
        {(DB_Adapter.isConnected 
          ? (
            <div>
              <Link onClick={reset} to={profileLink} >Profile</Link>
              <a>--</a> 
              <Link onClick={signoutHandler} to="/"> Sign Out</Link>
              </div>
          )
          : (
            <Link to="/Login"> log in </Link>
          )
        )}
      </div>
    </div>
);

export default Header;