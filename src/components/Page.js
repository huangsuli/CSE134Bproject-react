import React from 'react';
import Header from './subComponents/Header.js';
import Footer from './subComponents/Footer.js';
import Index from './Index.js'; //no requirements
import Profile from './Profile.js'; //requires isDoctor
import Signup from './Signup.js'; //requires isDoctor
import Chat from './Chat.js'; //requires isDoctor
import About from './About.js'; //no requirements
import Contact from './Contact.js';
import Rate from './Rate.js';

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
            <div>
                <Header isConnected={this.state.isConnected} />
                <Profile isDoctor={this.state.isDoctor} />
                <Footer />
            </div>
        );
    }
}
