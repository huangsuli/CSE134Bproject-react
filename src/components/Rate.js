import React from 'react';
//import StarRatings from './../../node_modules/react-star-ratings';
import {Link, IndexLink} from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

export default class Rate extends React.Component {

    constructor(props) {
        super(props);
        this.handleEdit = this.handleEdit.bind(this);
        this.resetErrors = this.resetErrors.bind(this);

        this.state = {
            comErr: "",
            ratingErr:"",
            visitorErr: ""
        };
    }

    //reset errors
    resetErrors() {
        this.setState( () => ({            
            comErr: "",
            ratingErr:"",
            visitorErr:""
        }));
    }

    //handler
    handleEdit(eForm) {
        eForm.preventDefault();

        this.resetErrors();

        //added
        let rating = eForm.target.elements.score.value;
        let comment = eForm.target.elements.comment.value.trim();
        if (this.props.isDoctor) {
            let visit = eForm.target.elements.visit.value;
            if(!visit) {
                err = true;
                this.setState ( () => ({visitorErr: "Please check an option"}));
            }
        }

        let err = false;

        //added
        if(!comment) {
            err = true;
            this.setState ( () => ({comErr: "Please leave a comment"}));
        }

        
        if (!rating) {
            err = true;
            this.setState (() => ({ratingErr: "Please leave a rating"}));
        } 

        if(!err) {
            //changed new user to new comment, not even needed for this
            let newRate = {
                Comment: comment,
                Rating: rating
            };

            alert("Your review has been submitted. Thank you!");

            //console.log(newComment);
        }  
    }

    //rendering based on patient or doctor
    render(props) {
        if (!this.props.isDoctor) {
            return (
            <div id="body">
                <div className="article">
                    <form onSubmit={this.handleEdit} id="paForm">
                    <div className="rate_title">
                    <h2>Please rate your experience with Dr. Pepper!</h2>
                </div>
                <div className="center">
                    <span className="error_span">{this.state.ratingErr}</span>
                </div>
                <div className="star">
                    Score:

                    <input type="radio" id="star5" name="score" value="5" />
                    <label title="5 stars" htmlFor="star5">5 stars</label>

                    <input type="radio" id="star4" name="score" value="4" />
                    <label title="4 stars" htmlFor="star4">4 stars</label>

                    <input type="radio" id="star3" name="score" value="3" />
                    <label title="3 stars" htmlFor="star3">3 stars</label>

                    <input type="radio" id="star2" name="score" value="2" />
                    <label title="2 stars" htmlFor="star2">2 stars</label>

                    <input type="radio" id="star1" name="score" value="1" />
                    <label title="1 star" htmlFor="star1">1 stars</label>

                </div>
                        <div className="rate_title">
                            <h2>Please leave a comment about this session:</h2>
                        </div>
                        <div className="center">
                        <span className="error_span">{this.state.comErr}</span>
                        </div>
                        <div className="blue_inputs">
                        <div className="textarea_center">
                            <textarea className="big_blue_textarea" name="comment" placeholder="Enter your comment here"></textarea>
                        </div>
                        </div>

                        <div className="center">
                        <div className="form_button">
                            <input className="medium_blue_r_button" type="submit" value="Submit" />
                        </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
    else {
        return (
            <div id="body">
            <div className="article">
                <form onSubmit={this.handleEdit} id="docForm">
                <div className="rate_title">
                    <h2>Please rate your experience with Patient Zero!</h2>
                </div>
                <div className="center">
                    <span className="error_span">{this.state.ratingErr}</span>
                </div>
                <div className="star">
                    Score:

                    <input type="radio" id="star5" name="score" value="5" />
                    <label title="5 stars" htmlFor="star5">5 stars</label>

                    <input type="radio" id="star4" name="score" value="4" />
                    <label title="4 stars" htmlFor="star4">4 stars</label>

                    <input type="radio" id="star3" name="score" value="3" />
                    <label title="3 stars" htmlFor="star3">3 stars</label>

                    <input type="radio" id="star2" name="score" value="2" />
                    <label title="2 stars" htmlFor="star2">2 stars</label>

                    <input type="radio" id="star1" name="score" value="1" />
                    <label title="1 star" htmlFor="star1">1 stars</label>

                </div>
                    <div className="rate_title">
                        <h2>Patient's Diagnosis:</h2>
                    </div>
                    <div className="center">
                    <span className="error_span">{this.state.comErr}</span>
                    </div>
                    <div className="blue_inputs">
                    <div className="textarea_center">
                        <textarea className="big_blue_textarea" name="comment" placeholder="What have you diagnosed?"></textarea>
                    </div>
                    </div>
                    <div className="rate_title">
                            <h2>Please leave a comment about this session (Optional):</h2>
                        </div>
                        <div className="center">
                        <span className="error_span"></span>
                        </div>
                        <div className="blue_inputs">
                        <div className="textarea_center">
                            <textarea className="big_blue_textarea" name="paComm" placeholder="How was the session?"></textarea>
                        </div>
                        </div>

                        <div className="rate_title">
                    <h2>
                        Should the patient carry out an in-person visit? <br />
                        <div className="center">
                            <span className="error_span">{this.state.visitorErr}</span>
                        </div>
                        <span className="radio_h2">
                        <input type="radio" name="visit" value="yes" /> Yes
                        <input type="radio" name="visit" value="no" /> No
                      </span>
                    </h2>
                </div>
                    <div className="center">
                    <div className="form_button">
                        <input className="medium_blue_r_button" type="submit" value="Submit" />
                    </div>
                    </div>
                </form>
            </div>
        </div>

        );
    }
    }
}