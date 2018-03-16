import React from 'react';
import Header from './subComponents/Header.js';
import Footer from './subComponents/Footer.js';
import Index from './Index.js';
import Chat from './Chat.js';
import Profile from './Profile.js'
import Signup from './Signup.js'
import Login from './Login.js'
import Chatroom from './Chatroom.js'

import {  BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

export default class Page extends React.Component {
    constructor() {
        super();
        this.state = {
            isConnected: false,
            isDoctor: true
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
                 <Route path="/doc_signup"render={(routeProps) => (
                    <Signup isDoctor={true} />
                 )}/>
                 <Route path="/pat_signup"render={(routeProps) => (
                    <Signup isDoctor={false} />
                 )}/>
                 <Route path="/pat_profile"render={(routeProps) => (
                    <Profile isDoctor={false} />
                 )}/>
                 <Route path="/doc_profile"render={(routeProps) => (
                    <Profile isDoctor={true} />
                 )}/>
                 <Route path="/pat_chat"render={(routeProps) => (
                    <Chat isDoctor={false} />
                 )}/>
                 <Route path="/doc_chat"render={(routeProps) => (
                    <Chat isDoctor={true} />
                 )}/>
                 <Route path="/login" component={Login} />
                </Switch>
                <Footer/>
            </div>
            </Router>
        );
    }
}
