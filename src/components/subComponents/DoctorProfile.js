import React from 'react';
import EditProfile from '../profileComponents/EditProfile';
import ProfileView from '../profileComponents/ProfileView';
import AcceptedRequests from '../profileComponents/AcceptedRequests';
import RejectedRequests from '../profileComponents/RejectedRequests';
import PendingRequests from '../profileComponents/PendingRequests';

export default class DoctorProfile extends React.Component {

    render(props) {
        console.log(this.props.viewSelector);     
        return (                          
            <div id="body">
            { (this.props.viewSelector==0) && <ProfileView />}
            { (this.props.viewSelector==1) && <EditProfile />}            
            { (this.props.viewSelector==2) && <PendingRequests />}
            { (this.props.viewSelector==3) && <AcceptedRequests />}
            { (this.props.viewSelector==4) && <RejectedRequests />}
            { (this.props.viewSelector>4) && <ProfileView />}
            </div>
        );
    }
}