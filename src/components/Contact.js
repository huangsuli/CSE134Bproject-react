import React from 'react';

export default class Contact extends React.Component {
     //constructor
     constructor(props) {
        super(props);
        this.handleEdit = this.handleEdit.bind(this);
        this.resetErrors = this.resetErrors.bind(this);

        this.state = {
            firstErr: "",
            lastErr: "",
            emailErr: "",
            comErr: "",
            //ratingErr:""
            phoneErr: ""
        };
    }
    //reset errors
    resetErrors() {
        this.setState( () => ({            
            firstErr: "",
            lastErr: "",
            emailErr: "",
            comErr: ""
            //ratingErr:""
        }));
    }
    //handlers
    handleEdit(eForm) {
        eForm.preventDefault();

        this.resetErrors();

        let firstName = eForm.target.elements.name_first.value.trim();
        let lastName = eForm.target.elements.name_last.value.trim();
        let email = eForm.target.elements.email.value.trim();
        //added
        let comment = eForm.target.elements.comment.value.trim();
        let phoneNum = eForm.target.elements.phone_num.value.trim();
        //let rating = eForm.target.elements.user_rating.value;
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
        
        if (!phoneNum || !/^\d+$/.test(phoneNum) || !phoneNum.length===10) {
            err = true;
            this.setState( () => ({phoneErr: "Please enter a valid phone number. Format: 0000000000"}));
        }
        //added
        if(!comment) {
            err = true;
            this.setState ( () => ({comErr: "Please leave a comment"}));
        }

        /*
        if (!rating) {
            err = true;
            this.setState (() => ({ratingErr: "Please leave a rating"}));
        } */
 
        if(!err) {
            //changed new user to new comment, not even needed for this
            let newComment = {
                First: firstName,
                Last: lastName,
                Email: email,
                fullName() {return (this.First + " " + this.Last);}
                //added
            };

            alert("Your comment has been submitted. Thank you!");

            //console.log(newComment);
        }  
    }
    
    //render
    render(props) {
        return (
        <div id="body">
        <div className="article">
            <div className="article_title">
                <h1>Need to reach us?</h1>
            </div>
            <p>Please leave your contact information and comments below. We are happy to hear from you.</p>
        </div>
        <br></br>
        <div className="article">
            <form onSubmit={this.handleEdit}> 
                <div className="form blue_inputs blue_dropbox roboto">
                    First Name :<br />
                    <span className="error_span">{this.state.firstErr}</span>
                    <input type="text" name="name_first" />

                    <br /> Last Name : <br />
                    <span className="error_span">{this.state.lastErr}</span>
                    <input type="text" name="name_last" />

                    <br /> Email Address :<br />
                    <span className="error_span">{this.state.emailErr}</span>
                    <input type="text" name="email" />

                    <br /> Phone Number :<br />
                    <span className="error_span">{this.state.phoneErr}</span>
                    <input type="text" name="phone_num" />

                    <br /> Comments: <br />
                    <span className="error_span">{this.state.comErr}</span>
                    <div className="blue_inputs textarea_unsize">
                        <textarea name="comment" rows="10"></textarea>
                    </div>
                    <div className="form_button">
                        <input className="medium_blue_r_button" type="submit" value="Submit" />
                    </div>

                </div>
            </form>
        </div>
    </div>);
    }
}