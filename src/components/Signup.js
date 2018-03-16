import React from 'react';
import {  BrowserRouter as Router, Route, Link, Switch ,Redirect} from 'react-router-dom';

export default class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.handleEdit = this.handleEdit.bind(this);
        this.resetErrors = this.resetErrors.bind(this);

        this.state = {
            firstErr: "",
            lastErr: "",
            emailErr: "",
            emailConfErr: "",
            passErr: "",
            passConfErr: "",
            locationErr: "",
            dobErr: "",
            redirect: false
        };
    }

    resetErrors() {
        this.setState( () => ({            
            firstErr: "",
            lastErr: "",
            emailErr: "",
            emailConfErr: "",
            passErr: "",
            passConfErr: "",
            locationErr: "",
            dobErr: ""
        }))
    }

    handleEdit(eForm) {
        eForm.preventDefault();

        this.resetErrors();

        let firstName = eForm.target.elements.user_first.value.trim();
        let lastName = eForm.target.elements.user_last.value.trim();
        let email = eForm.target.elements.user_email.value.trim();
        let emailConf = eForm.target.elements.user_email_conf.value.trim();
        let pass = eForm.target.elements.user_pass.value;
        let passConf = eForm.target.elements.user_pass_conf.value;
        let city = eForm.target.elements.user_city.value.trim();
        let st = eForm.target.elements.user_state.value;
        let day = eForm.target.elements.bd_day.value;
        let month = eForm.target.elements.bd_month.value;
        let year = eForm.target.elements.bd_year.value;
        let gender = eForm.target.elements.gender.value;
        let err = false;

        if(!firstName || (/\d/.test(firstName))) {
            err = true;
            this.setState( () => ({firstErr: "Please enter a correct first name"}) );
        }

        if(!lastName || (/\d/.test(lastName))) {
            err = true;
            this.setState( () => ({lastErr: "Please enter a correct last name"}) );
        }

        if(!email || !email.includes("@") || !email.includes(".")) {
            err = true;
            this.setState( () => ({emailErr: "Please enter a correct email"}) );
        }

        if(emailConf != email) {
            err = true;
            this.setState( () => ({emailConfErr: "Emails do not match"}) );
        }

        if(!pass) {
            err = true;
            this.setState( () => ({passErr: "Please enter a password"}) );
        }

        if(pass != passConf) {
            err = true;
            this.setState( () => ({passConfErr: "Passwords do not match"}) );
        }

        if(!city || !st) {
            err = true;
            this.setState( () => ({locationErr: "Please select a correct location"}) );
        }

        if(!day || !month || !year) {
            err = true;
            this.setState( () => ({dobErr: "Please select a correct date of birth"}) );
        }

        if(!err) {

            let newUser = {
                First: firstName,
                Last: lastName,
                Email: email,
                Password: pass,
                City: city,
                State: st,
                Birthday:
                {
                    Day: day,
                    Month: month,
                    Year: year,
                    ToString() { return this.Day + "/" + this.Month + "/" + this.Year}
                },
                Gender: gender,
                Session: "No session at the moment",
                fullName() {return (this.First + " " + this.Last)},
                getLocation() {return (this.City + ", " +this.State)}
            }
            this.setState( ()=> ({redirect: true}))
            console.log(newUser);
        }
        
        
    }

    render(props) {
        let profile_url = null;
        if(this.props.isDoctor) {
            profile_url = "doc_profile";
        }else {
            profile_url = "pat_profile";
        }

        return (
            <div id="body">
            <div className="article">
                <div className="article_title">
                    {this.props.isDoctor && <h1>Doctor Sign Up <a id="signin_extra" className="link_style" >(Already a Doctor?)</a></h1>}
                    {!this.props.isDoctor && <h1>Patient Sign Up <a id="signin_extra" className="link_style" >(Already a Patient?)</a></h1>}
                </div>
                <p>Welcome dear user!</p>
                <p>Lorem ipsum dolor sit amet tortor. Integer est leo, accumsan in nunc id, iaculis elementum mi. Curabitur pharetra risus lorem, eget porta ligula molestie sit amet. Morbi at lorem vulputate, congue eros vel, commodo lectus. Maecenas efficitur eu mi eu ultrices.</p>    
            </div>
            <br />
            <div className="article">
                <div class="article_title">
                    <h2>Sign up form</h2>
                </div>
                    <div className="form blue_inputs blue_dropbox roboto">
                    <form onSubmit={this.handleEdit}>
                        First Name :<br />
                        <span className="error_span">{this.state.firstErr}</span>
                        <input type="text" name="user_first" /> <br />

                        Last Name : <br />
                        <span className="error_span">{this.state.lastErr}</span>
                        <input type="text" name="user_last"  /> <br />

                        Email : <br />
                        <span className="error_span">{this.state.emailErr}</span>
                        <input type="email" name="user_email"  /> <br />

                        Confirm Email : <br />
                        <span className="error_span">{this.state.emailConfErr}</span>
                        <input type="email" name="user_email_conf"  /> <br />

                        Password : <br />
                        <span className="error_span">{this.state.passErr}</span>
                        <input type="password" name="user_pass"/> <br />

                        Confirm Password : <br />
                        <span className="error_span">{this.state.passConfErr}</span>
                        <input type="password" name="user_pass_conf"/> <br />

                        Location :
                        <span className="error_span">{(this.state.locationErr) && <br />}{this.state.locationErr}</span> <br />
                        <input id="input_city" name="user_city" type="text" placeholder="City" />

                        <select name="user_state" defaultValue="" >
                            <option value="" disabled hidden>States</option>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                        </select> <br/>

                        Birthday :
                        <span className="error_span">{(this.state.dobErr) && <br />}{this.state.dobErr}</span><br/>
                        <select name="bd_month" defaultValue="" >
                            <option value="" disabled hidden>MM</option>
                            <option value="1">01</option>
                            <option value="2">02</option>
                            <option value="3">03</option>
                            <option value="4">04</option>
                            <option value="5">05</option>
                        </select>

                        <select name="bd_day" defaultValue="" >
                            <option value="" disabled hidden>DD</option>
                            <option value="1">01</option>
                            <option value="2">02</option>
                            <option value="3">03</option>
                            <option value="4">04</option>
                            <option value="5">05</option>
                        </select>
                
                        <input id="input_year" name="bd_year" type="text" maxlength="4" placeholder="YYYY" /> <br />

                        Gender <br />
                        <input type="radio" name="gender" value="Male" defaultChecked={true} /> Male
                        <input type="radio" name="gender" value="Female" /> Female <br />

                        <div className="form_button">
                               <input className="medium_blue_r_button" type="submit" value="Sign up!"/>
                               {this.state.redirect && <Redirect to={profile_url}/>}
                        </div>
                    </form>
                    </div>
            </div>
            </div>
        );
    }
}