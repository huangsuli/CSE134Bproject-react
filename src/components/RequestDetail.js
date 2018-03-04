import React from 'react';
import {  BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

export default class RequestDetail extends React.Component {
    constructor(props) {
        super(props);
        this.rejecter = this.rejecter.bind(this);
        this.showMoreDetails = this.showMoreDetails.bind(this);
        this.state = {
            user: {
                First: "Ben",
                Last: "Chafik",
                Email: "achafik@ucsd.edu",
                Password: "123456",
                City: "San Diego",
                State: "CA",
                Birthday:
                {
                    Day: 1,
                    Month: 5,
                    Year: 1994,
                    ToString() { return this.Day + "/" + this.Month + "/" + this.Year}
                },
                Gender: "Male",
                Session: "No session at the moment",
                fullName() {return (this.First + " " + this.Last)},
                getLocation() {return (this.City + ", " +this.State)}   
            },
            showExtra: false
        }
    }

    rejecter() {
        alert("The request has been rejected and " + this.state.user.fullName() + " has been notified!");
    }

    showMoreDetails() {
        this.setState( () => ({showExtra: true}) );
    }

    render() {
        return (
            <div id="body">
                <div className="article" id="requestInfo">
                    <h3 className="article_title"> Request Information </h3>
                    <div className="info_container roboto">
                        <table>
                        <tbody>
                            <tr>
                            <th>Name</th>
                            <td>{this.state.user.fullName()}</td>
                            </tr>

                            <tr>
                                <th>Age</th>
                                <td>{2018 - this.state.user.Birthday.Year}</td>
                            </tr>

                            <tr>
                                <th>Email</th>
                                <td>{this.state.user.Email}</td>
                            </tr>

                            <tr>
                            <th>Gender</th>
                            <td>{this.state.user.Gender}</td>
                            </tr>

                            <tr className="last_tr">
                            <th>Date</th>
                            <td>03/12/2018</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                </div>

                <br />

                <div className="article">
                    <h3 className="article_title">Symptom Details</h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur placerat euismod. Pellentesque sagittis nisl non ex ultricies egestas. Pellentesque tincidunt nisi sit amet rutrum consectetur. Proin consectetur ante eget nunc rutrum hendrerit. Cras quis ligula in arcu consequat malesuada ac in velit. Phasellus porttitor lorem vel nulla laoreet bibendum. Nullam tincidunt magna eget pellentesque pellentesque. Sed tempus felis id feugiat mattis. Etiam ante tellus, efficitur ornare ante vitae, ultricies efficitur orci. In ultricies odio at mauris congue imperdiet.
                    </p>
                </div>

                <div id="firstButtons">
                <div id="index_choices">
                    <button className="medium_blue_r_button" onClick={this.showMoreDetails} >Accept</button>
                    <Link to="/"> <button className="medium_blue_r_button button_left_marg" onClick={this.rejecter}>Reject</button></Link>
                </div>
                </div><br />

                {( this.state.showExtra && (<div><div className="article">
                    <div className="article blue_inputs" id="rejectionField">
                        Please enter the reason for rejecting this patient:
                        <span className="error_span"> </span><br/>
                        <textarea name="rejectionText" rows="10" cols="40" ></textarea>                   
                    </div>
                </div>
                <div id="index_choices">
                        <input className="medium_blue_r_button" type="submit" value="Submit"/>
                        <button className="medium_blue_r_button button_left_marg" >Clear</button>
                </div></div>))}
            </div>
        )
    }
}