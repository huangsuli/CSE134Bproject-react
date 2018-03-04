import React from 'react';

const Header = (props) => (
    <div id="header">
      <div id="title_block">
      
        <a href="index.html"><img src={require('./../../styles/Pictures/male_doctor.png')} alt="" id="doc_pic"/></a>
        <h1 id="title"> WebMD </h1>
      </div>
      <div id="header_login">
        {(props.isConnected ? <div><a>Profile</a> <a> Sign Out</a></div> : <a> log in </a>)}
      </div>
    </div>
);

export default Header;