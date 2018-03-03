import React from 'react';
import EditProfile from '../profileComponents/EditProfile';
import ProfileView from '../profileComponents/ProfileView';
import MakeRequest from '../profileComponents/MakeRequest';
import RequestHistory from '../profileComponents/RequestHistory';

export default class PatientProfile extends React.Component {

    render(props) {
        console.log(this.props.viewSelector);     
        return (                          
            <div id="body">
            { (this.props.viewSelector==0) && <ProfileView />}
            { (this.props.viewSelector==1) && <EditProfile />}
            { (this.props.viewSelector==2) && <MakeRequest />}
            { (this.props.viewSelector==3) && <RequestHistory />}
            { (this.props.viewSelector>3) && <ProfileView />}
            </div>
        );
    }
}