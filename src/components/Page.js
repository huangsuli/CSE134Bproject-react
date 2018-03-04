import React from 'react';
import Header from './subComponents/Header.js'; //requires isConnected
import Footer from './subComponents/Footer.js';
import Index from './Index.js'; //no requirements
import Profile from './Profile.js'; //requires isDoctor
import Signup from './Signup.js'; //requires isDoctor
import Chat from './Chat.js'; //requires isDoctor
import About from './About.js'; //no requirements
import Contact from './Contact.js'; //no requirements
import Rate from './Rate.js'; //requires isDoctor
import Login from './Login.js'; //no requirements
import {  BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

export default class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isConnected: false,
            isDoctor: false
        };
    }

    render() {
        return(
            <Router>
            <div>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Index} />

                    <Route path="/profile" component={Profile} />

                    <Route path="/doctor_register"render={(routeProps) => (
                        <Signup isDoctor={true} />
                    )}/>

                    <Route path="/patient_register"render={(routeProps) => (
                        <Signup isDoctor={false} />
                    )}/>

                    <Route path="/patient_profile"render={(routeProps) => (
                        <Profile isDoctor={false} />
                    )}/>

                    <Route path="/doctor_profile"render={(routeProps) => (
                        <Profile isDoctor={true} />
                    )}/>

                    <Route path="/patient_chat"render={(routeProps) => (
                        <Chat isDoctor={false} />
                    )}/>

                    <Route path="/doctor_chat"render={(routeProps) => (
                        <Chat isDoctor={true} />
                    )}/>

                    <Route path="/doctor_rate"render={(routeProps) => (
                        <Rate isDoctor={true} />
                    )}/>

                    <Route path="/patient_rate"render={(routeProps) => (
                        <Rate isDoctor={false} />
                    )}/>

                    <Route path="/contact_us" component={Contact} />

                    <Route path="/About_us" component={About} />

                    <Route path="/Login" component={Login} />

                    <Route component={Index} />
                </Switch>
                <Footer/>
            </div>
            </Router>
        );
    }
}
