import React from 'react';
import Header from './subComponents/Header.js';
import Footer from './subComponents/Footer.js';
import Index from './Index.js';

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
            <div>
                <Header isConnected={true} />
                <Index />
                <Footer />
            </div>
        );
    }
}
