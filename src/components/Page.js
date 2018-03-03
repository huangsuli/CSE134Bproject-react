import React from 'react';
import Header from './subComponents/Header.js';
import Footer from './subComponents/Footer.js';
import Index from './Index.js';
import Profile from './Profile.js';

export default class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isConnected: true,
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
