import React from 'react';
import Menu from './subComponents/Menu.js';
import PatientProfile from './subComponents/PatientProfile.js';
import DoctorProfile from './subComponents/DoctorProfile.js';
import DB_Adapter from './Redux/ReduxDBAdapter.js';
import {  BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';


export default class Page extends React.Component {
    constructor(props) {
        super(props);

        this.selectorChangerHandler = this.selectorChangerHandler.bind(this);
        this.state = {
            viewSelector: 0
        };
    }

    selectorChangerHandler(selectorId) {
        //alert("SelectorChangerHandler is called with: " + selectorId);   
        this.setState( () => ({viewSelector: selectorId}) );    
    }

    render(props) {  
        if(DB_Adapter.isConnected) {
            return (
                <div>
                    <Menu isDoctor={this.props.isDoctor} selectorChanger={this.selectorChangerHandler} />
                    {(this.props.isDoctor) 
                    ? <DoctorProfile viewSelector={this.state.viewSelector} isDoctor={this.props.isDoctor} />
                    : <PatientProfile viewSelector={this.state.viewSelector} />}
                </div>
            );
        }   else {
            return(<Redirect to="/" />);
        }   
       
    }
}