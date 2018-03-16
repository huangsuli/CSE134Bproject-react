import React from 'react';
import {  BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const Index = () => (
    <div id="body">
      <div className="article">
        <h1 className="article_title"> Welcome to WebMD </h1>
        <img alt="" className="article_pic"/>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur placerat euismod. Pellentesque sagittis nisl non ex ultricies egestas. Pellentesque tincidunt nisi sit amet rutrum consectetur. Proin consectetur ante eget nunc rutrum hendrerit. Cras quis ligula in arcu consequat malesuada ac in velit. Phasellus porttitor lorem vel nulla laoreet bibendum. Nullam tincidunt magna eget pellentesque pellentesque. Sed tempus felis id feugiat mattis. Etiam ante tellus, efficitur ornare ante vitae, ultricies efficitur orci. In ultricies odio at mauris congue imperdiet.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur placerat euismod. Pellentesque sagittis nisl non ex ultricies egestas. Pellentesque tincidunt nisi sit amet rutrum consectetur. Proin consectetur ante eget nunc rutrum hendrerit. Cras quis ligula in arcu consequat malesuada ac in velit. Phasellus porttitor lorem vel nulla laoreet bibendum. Nullam tincidunt magna eget pellentesque pellentesque. Sed tempus felis id feugiat mattis. Etiam ante tellus, efficitur ornare ante vitae, ultricies efficitur orci. In ultricies odio at mauris congue imperdiet.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur placerat euismod. Pellentesque sagittis nisl non ex ultricies egestas. Pellentesque tincidunt nisi sit amet rutrum consectetur. Proin consectetur ante eget nunc rutrum hendrerit. Cras quis ligula in arcu consequat malesuada ac in velit. Phasellus porttitor lorem vel nulla laoreet bibendum. Nullam tincidunt magna eget pellentesque pellentesque. Sed tempus felis id feugiat mattis. Etiam ante tellus, efficitur ornare ante vitae, ultricies efficitur orci. In ultricies odio at mauris congue imperdiet.

        </p>
      </div>

      <div id="index_choices">
        <div className="left_floater">
          <div className="big_blue_button">
          <Link to="/pat_signup">Get an online examination!</Link>
          </div>
        </div>
        <div className="left_floater">
          <div className="big_blue_button">
            <Link to= "/doc_signup">Join our Doctor team!</Link>
          </div>
        </div>
                
      </div>
    </div>
);

export default Index;