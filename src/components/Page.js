import React from 'react';
import Header from './subComponents/Header.js';
import Footer from './subComponents/Footer.js';
import Index from './Index.js';
import About from './About.js';
import Contact from './Contact.js';
import Rate from './Rate.js';

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
            <div>
                <Header isConnected={true} />
                <Contact />
                <Footer />
            </div>
        );
    }
}
