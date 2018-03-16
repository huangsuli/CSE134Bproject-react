import React from 'react';
import DB_Adapter from '../Redux/ReduxDBAdapter';

export default class EditProfile extends React.Component {
    constructor(props) {
        super(props);
        this.handleEdit = this.handleEdit.bind(this);
        this.resetErrors = this.resetErrors.bind(this);

        this.state = {
            firstErr: "",
            lastErr: "",
            emailErr: "",
            emailConfErr: "",
            oldPassErr: "",
            newPassErr: "If left blank then old password won't change",
            newPassConfErr: "",
            locationErr: "",
            dobErr: ""
        };
    }

    resetErrors() {
        this.setState( () => ({            
            firstErr: "",
            lastErr: "",
            emailErr: "",
            emailConfErr: "",
            oldPassErr: "",
            newPassErr: "If left blank then old password won't change",
            newPassConfErr: "",
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
        let oldPass = eForm.target.elements.user_old_pass.value;
        let newPass = eForm.target.elements.user_new_pass.value;
        let newPassConf = eForm.target.elements.user_new_pass_conf.value;
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

        if(!oldPass) {
            err = true;
            this.setState( () => ({oldPassErr: "Your password is required to update your information"}) );
        }

        if(newPass != newPassConf) {
            err = true;
            this.setState( () => ({newPassConfErr: "New passwords do not match"}) );
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
            if (newPass)
                oldPass = newPass;

            let updatedUser = {
                id: DB_Adapter.getConnectedUser().id,
                isDoctor: DB_Adapter.getConnectedUser().isDoctor,
                First: firstName,
                Last: lastName,
                Email: email,
                Password: oldPass,
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

            this.props.userUpdater(updatedUser);
        }
        
        
    }

    render(props) {
        return (
            <div className="article" id="editProfile">
                <div className="article_title">
                    <h3>Edit Information</h3>
                </div>

                <div className="info_container container_spread roboto">
                    <div className="form blue_inputs blue_dropbox roboto">
                    <form onSubmit={this.handleEdit}>
                        First Name :<br />
                        <span className="error_span">{this.state.firstErr}</span>
                        <input type="text" name="user_first" defaultValue={this.props.userInfo.First} /> <br />

                        Last Name : <br />
                        <span className="error_span">{this.state.lastErr}</span>
                        <input type="text" name="user_last" defaultValue={this.props.userInfo.Last} /> <br />

                        Email : <br />
                        <span className="error_span">{this.state.emailErr}</span>
                        <input type="email" name="user_email" defaultValue={this.props.userInfo.Email} /> <br />

                        Confirm Email : <br />
                        <span className="error_span">{this.state.emailConfErr}</span>
                        <input type="email" name="user_email_conf" defaultValue={this.props.userInfo.Email} /> <br />

                        Old Password : <br />
                        <span className="error_span">{this.state.oldPassErr}</span>
                        <input type="password" name="user_old_pass"/> <br />

                        New Password : <br />
                        <span className="error_span">{this.state.newPassErr}</span>
                        <input type="password" name="user_new_pass"/> <br />

                        Confirm New Password : <br />
                        <span className="error_span">{this.state.newPassConfErr}</span>
                        <input type="password" name="user_new_pass_conf"/> <br />

                        Location :
                        <span className="error_span">{(this.state.locationErr) && <br />}{this.state.locationErr}</span> <br />
                        <input id="input_city" name="user_city" type="text" placeholder="City" defaultValue={this.props.userInfo.City} />

                        <select name="user_state" defaultValue={this.props.userInfo.State} >
                            <option value="" disabled hidden>States</option>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                        </select> <br/>

                        Birthday :
                        <span className="error_span">{(this.state.dobErr) && <br />}{this.state.dobErr}</span><br/>
                        <select name="bd_month" defaultValue={this.props.userInfo.Birthday.Month} >
                            <option value="" disabled hidden>MM</option>
                            <option value="1">01</option>
                            <option value="2">02</option>
                            <option value="3">03</option>
                            <option value="4">04</option>
                            <option value="5">05</option>
                        </select>

                        <select name="bd_day" defaultValue={this.props.userInfo.Birthday.Day} >
                            <option value="" disabled hidden>DD</option>
                            <option value="1">01</option>
                            <option value="2">02</option>
                            <option value="3">03</option>
                            <option value="4">04</option>
                            <option value="5">05</option>
                        </select>
                
                        <input id="input_year" name="bd_year" type="text" maxlength="4" placeholder="YYYY" defaultValue={this.props.userInfo.Birthday.Year} /> <br />

                        Gender <br />
                        <input type="radio" name="gender" value="Male" defaultChecked={(this.props.userInfo.Gender == "Male")} /> Male
                        <input type="radio" name="gender" value="Female" defaultChecked={(this.props.userInfo.Gender != "Male")} /> Female <br />

                        <div className="form_button">
                            <input className="medium_blue_r_button" type="submit" value="Update"/>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        );
    }
}