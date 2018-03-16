import React from 'react';
import {  BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const Login = () => (
    <div id="login_container" class="roboto">
    <div class="form blue_inputs special_inputs">
    <span id="login_title">Login Form</span>
    <Link to="/"> <a id="login_back"> Go Back </a> </Link>
    <form>
      <br/>Email: <br />
      <input type="email" /> <br />
      Password: <br />
      <input type="password" /> <br />
      <input class="medium_blue_r_button button_marg_low" type="submit" value="Sign in" />
    </form>
  </div>
  </div>
);

export default Login;