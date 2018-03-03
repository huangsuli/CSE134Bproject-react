import React from 'react';
import Menu from './subComponents/Menu.js';
import PatientProfile from './subComponents/PatientProfile.js';
import DoctorProfile from './subComponents/DoctorProfile.js';

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
        return (
            <div>
                <Menu isDoctor={this.props.isDoctor} selectorChanger={this.selectorChangerHandler} />
                {(this.props.isDoctor) 
                ? <DoctorProfile viewSelector={this.state.viewSelector} />
                : <PatientProfile viewSelector={this.state.viewSelector} />}
            </div>
        );
    }
}