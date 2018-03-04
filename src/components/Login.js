import React from 'react';
import {  BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const Login = () => {
    return (
        <div id="login_container" className="roboto">
            <div className="form blue_inputs special_inputs">
                <span id="login_title">Login Form</span>
                <Link to="/" id="login_back"> Go Back </Link>

                <form>
                    <br/>Email: <br />
                    <input type="email" /> <br />
                    Password: <br />
                    <input type="password" /> <br />
                    <input className="medium_blue_r_button button_marg_low" type="submit" value="Sign in" />
                </form>
            </div>
        </div>
    )
}

export default Login;