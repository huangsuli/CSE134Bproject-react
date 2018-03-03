import React from 'react';
import Header from './subComponents/Header.js';
import Footer from './subComponents/Footer.js';
import Index from './Index.js';
import Chat from './Chat.js';
import {  BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

export default class Page extends React.Component {
    constructor() {
        super();
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
                 <Route path="/Chat" component={Chat} />
                </Switch>
                <Footer/>
            </div>
            </Router>
        );
    }
}
