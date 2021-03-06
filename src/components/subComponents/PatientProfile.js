import React from 'react';
import EditProfile from '../profileComponents/EditProfile';
import ProfileView from '../profileComponents/ProfileView';
import MakeRequest from '../profileComponents/MakeRequest';
import RequestHistory from '../profileComponents/RequestHistory';
import DB_Adapter from '../Redux/ReduxDBAdapter';

export default class PatientProfile extends React.Component {
    constructor(props) {
        super(props);
        this.requestAddHandler = this.requestAddHandler.bind(this);
        this.userUpdaterHandler = this.userUpdaterHandler.bind(this);
        this.state = {
            user: DB_Adapter.getConnectedUser(),
            requests: [
                {
                    id: 1,
                    date:
                    {
                      Day: 10,
                      Month: 29,
                      Year: 2016,
                      ToString() {return this.Day + "/" + this.Month + "/" + this.Year}
                    },
                    doctorName: "Monica Guntaler",
                    symptoms: "",
                    log: ["You submitted a request to Monica Guntaler.",
                        "Monica Guntaler reviewed request.",
                        "Monica Guntaler rejected request, reason: <br />\"Patient does not provide enough information.\""],
                    status: 0
                },
                {
                    id: 2,
                    date:
                    {
                      Day: 6,
                      Month: 15,
                      Year: 2017,
                      ToString() {return this.Day + "/" + this.Month + "/" + this.Year}
                    },
                    doctorName: "John Selvester",
                    symptoms: "",
                    log: ["You submitted a request to John Selvester",
                        "John Selvester reviewed request.",
                        "John Selvester accepted request.",
                        "John Selvester set a chat meeting at 06/15/2017 4:20 PM",
                        "Chatted with John Selvester",
                        "Chat log: <br />\"CHAT LOG HERE\"",
                        "John Selvester left a comment and rated the conversation",
                        "You left a comment and rated the conversation"],
                    status: 1
                },
                {
                    id: 3,
                    date:
                    {
                      Day: 12,
                      Month: 5,
                      Year: 2017,
                      ToString() {return this.Day + "/" + this.Month + "/" + this.Year}
                    },
                    doctorName: "Mark Young",
                    symptoms: "",
                    log: ["You submitted a request to Mark Young"],
                    status: 2
                }
            ]
        };
    }

    requestAddHandler(bundledRequest) {
        bundledRequest.id = this.state.requests.length+1;
        this.setState( (prevState) => ({requests: prevState.requests.concat(bundledRequest)}) );
        alert("Your request has been submited!");
    }

    userUpdaterHandler(bundledUser) {
        this.setState( () => ({user: bundledUser}) );
        DB_Adapter.modifyUser(bundledUser);
        console.log("userUpdaterHandler: ");
        console.log(DB_Adapter);
        alert("Your information has been updated!");
    }

    render(props) {

        console.log("In PatientProfile: ");
        console.log(this.state.requests);
        return (                          
            <div id="body">
            { (this.props.viewSelector==0) && <ProfileView userInfo={this.state.user} isDoctor={this.props.isDoctor} />}
            { (this.props.viewSelector==1) && <EditProfile userInfo={this.state.user} userUpdater={this.userUpdaterHandler}/>}
            { (this.props.viewSelector==2) && <MakeRequest requestAdder={this.requestAddHandler}/>}
            { (this.props.viewSelector==3) && <RequestHistory requests={this.state.requests} />}
            { (this.props.viewSelector>3) && <ProfileView userInfo={this.state.user}/>}
            </div>
        );
    }
}