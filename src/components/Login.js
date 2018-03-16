import React from 'react';
import {  BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

import DB_Adapter from './Redux/ReduxDBAdapter';

export default class Login extends React.Component{
    constructor(props) {
        super(props);
        this.verifyLogin = this.verifyLogin.bind(this);
        this.resetErrors = this.resetErrors.bind(this);
        
        this.state = {
            emailErr: "",
            passErr: "",
            connectionErr: "",
            isDoctor: false,
            redirect: false
        };
    }

    resetErrors() {
        this.setState( () => ({            
            emailErr: "",
            passErr: "",
            connectionErr: ""
        }))
    }

    verifyLogin(eForm) {
        eForm.preventDefault();
        this.resetErrors();

        let err = false;
        let email = eForm.target.elements.user_email.value.trim();
        let pass = eForm.target.elements.user_password.value;

        if(!email || !email.includes("@") || !email.includes(".")) {
            err = true;
            this.setState( () => ({emailErr: "Please enter a correct email"}) );
        }

        if(!pass) {
            err = true;
            this.setState( () => ({passErr: "Please enter a password"}) );
        }

        let user = DB_Adapter.getUserByEmail(email);

        if(!user || user.Password != pass) {
            err = true;
            this.setState( () => ({connectionErr: "Your credentials are wrong or you are not a member yet!"}) );
        }

        if(!err) {
            DB_Adapter.setIsConnected(true);
            DB_Adapter.setId(user.id);
            this.setState( () => ({redirect: true, isDoctor: user.isDoctor}) );
        }

    }

    render () {
        return (
            <div id="login_container" className="roboto">
                <div className="form blue_inputs special_inputs">
                    <span id="login_title">Login Form</span>
                    <Link to="/" id="login_back"> Go Back </Link>
                    <br /><span className="error_span">{this.state.connectionErr}</span>

                    <form onSubmit={this.verifyLogin}>
                        <br/>Email: <br />
                        <span className="error_span">{this.state.emailErr}</span>
                        <input type="email" name="user_email"/> <br />
                        Password: <br />
                        <span className="error_span">{this.state.passErr}</span>
                        <input type="password" name="user_password"/> <br />
                        <input className="medium_blue_r_button button_marg_low" type="submit" value="Sign in" />
                    </form>
                    {this.state.redirect && <Redirect to={ (this.state.isDoctor) ? "/doctor_profile" : "/patient_profile"} />}

                </div>
            </div>
        );
    }
}