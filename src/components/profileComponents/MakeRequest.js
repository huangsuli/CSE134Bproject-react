import React from 'react';

const MakeRequest = (props) => {
    return (
        <div className="article" id="makeRequest">
            <div className="article_title">
                <h3>Request Form</h3>
            </div>

            <div className="info_container container_spread roboto">
            <div className="form blue_inputs blue_dropbox roboto">
                <form>
                Which doctor would you like to see? <br />
                <select id="doctor_names">
                    <option value="">Any</option>
                    <option value="Mark Young">Mark Young</option>
                    <option value="John Selvester">John Selvester</option>
                    <option value="Monica Guntaler">Monica Guntaler</option>
                </select> <br /><br/>

                Describe your symptoms and what might be aching : <br />
                <span id="describe_error" className="error_span"></span>
                <textarea id="symptoms_input" rows="10"></textarea> <br /><br />

                Choose the day that works for you : <br />
                <span id="time_error" className="error_span"></span>
                <div className="form blue_inputs blue_dropbox roboto">
                    <input id="input_date" type="date" name="app_date" />
                </div>
                <input type="button" className="medium_blue_r_button" value="Submit Form"/>
                </form>
            </div>
            </div>
        </div>
    );
};

export default MakeRequest;