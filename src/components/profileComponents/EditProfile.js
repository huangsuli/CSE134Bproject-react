import React from 'react';

const EditProfile = (props) => {
    return (
        <div className="article" id="editProfile">
            <div className="article_title">
                <h3>Edit Information</h3>
            </div>

            <div className="info_container container_spread roboto">
                <div className="form blue_inputs blue_dropbox roboto">
                    First Name :<br />
                    <span id="firstname_error" class="error_span"></span>
                    <input type="text" id="user_first"/> <br />

                    Last Name : <br />
                    <span id="lastname_error" class="error_span"></span>
                    <input type="text" id="user_last"/> <br />

                    Email : <br />
                    <span id="email_error" class="error_span"></span>
                    <input type="email" id="user_email"/> <br />

                    Confirm Email : <br />
                    <span id="email_conf_error" class="error_span"></span>
                    <input type="email" id="user_email_conf"/> <br />

                    Old Password : <br />
                    <span id="old_password_error" class="error_span"></span>
                    <input type="password" id="user_old_pass"/> <br />

                    New Password : <br />
                    <span id="new_password_error" class="error_span"></span>
                    <input type="password" id="user_new_pass"/> <br />

                    Confirm New Password : <br />
                    <span id="new_password_conf_error" class="error_span"></span>
                    <input type="password" id="user_new_pass_conf"/> <br />

                    Location : <br />
                    <span id="location_error" class="error_span"></span>
                    <input id="input_city" type="text" placeholder="City"/>

                    <select id="user_state" defaultValue="">
                        <option value="" disabled hidden>States</option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                    </select> <br/>

                    Birthday : <br />
                    <span id="year_error" class="error_span"></span>
                    <select id="bd_month" defaultValue="">
                        <option value="" disabled hidden>MM</option>
                        <option value="1">01</option>
                        <option value="2">02</option>
                        <option value="3">03</option>
                        <option value="4">04</option>
                        <option value="5">05</option>
                    </select>

                    <select id="bd_day" defaultValue="">
                        <option value="" disabled hidden>DD</option>
                        <option value="1">01</option>
                        <option value="2">02</option>
                        <option value="3">03</option>
                        <option value="4">04</option>
                        <option value="5">05</option>
                    </select>
              
                    <input id="input_year" type="text" maxlength="4" placeholder="YYYY"/> <br />

                    Gender <br />
                    <input type="radio" name="gender" id="radio_male"/> Male
                    <input type="radio" name="gender" id="radio_female"/> Female <br />

                    <div className="form_button">
                        <input className="medium_blue_r_button" type="submit" value="Update"/>
                        <button className="medium_blue_r_button button_left_marg" >Clear Form</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;