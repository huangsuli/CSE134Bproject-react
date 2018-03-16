import React from 'react';
import EditProfile from '../profileComponents/EditProfile';
import ProfileView from '../profileComponents/ProfileView';
import AcceptedRequests from '../profileComponents/AcceptedRequests';
import RejectedRequests from '../profileComponents/RejectedRequests';
import PendingRequests from '../profileComponents/PendingRequests';
import DB_Adapter from '../Redux/ReduxDBAdapter';

export default class DoctorProfile extends React.Component {
    constructor(props) {
        super(props);
        this.userUpdaterHandler = this.userUpdaterHandler.bind(this);
        this.state = {
            user: DB_Adapter.getConnectedUser(),
            pendingRequests: [
                {
                    id: 1,
                    date:
                    {
                      Day: 10,
                      Month: 29,
                      Year: 2016,
                      ToString() { return this.Day + "/" + this.Month + "/" + this.Year}
                    },
                    patientName: "Calvin Jack",
                    symptoms: "",
                    status: 0
                },
                {
                    id: 2,
                    date:
                    {
                      Day: 6,
                      Month: 15,
                      Year: 2017,
                      ToString() { return this.Day + "/" + this.Month + "/" + this.Year}
                    },
                    patientName: "Joseph Don",
                    symptoms: "",
                    status: 1
                },
                {
                    id: 3,
                    date:
                    {
                      Day: 12,
                      Month: 5,
                      Year: 2017,
                      ToString() { return this.Day + "/" + this.Month + "/" + this.Year}
                    },
                    patientName: "Lewis Mack",
                    symptoms: "",
                    status: 2
                }
            ],
            acceptedRequests: [
                {
                    id: 1,
                    date:
                    {
                      Day: 10,
                      Month: 29,
                      Year: 2016,
                      ToString() { return this.Day + "/" + this.Month + "/" + this.Year}
                    },
                    patientName: "Nicky Romero",
                    symptoms: "",
                    status: 0
                  },
                  {
                    id: 2,
                    date:
                    {
                      Day: 6,
                      Month: 15,
                      Year: 2017,
                      ToString() { return this.Day + "/" + this.Month + "/" + this.Year}
                    },
                    patientName: "Axwell Ingrosso",
                    symptoms: "",
                    status: 1
                  },
                  {
                    id: 3,
                    date:
                    {
                      Day: 12,
                      Month: 5,
                      Year: 2017,
                      ToString() { return this.Day + "/" + this.Month + "/" + this.Year}
                    },
                    patientName: "Martin Garrix",
                    symptoms: "",
                    status: 2
                  }
            ],
            rejectedRequests: [
                {
                    id: 1,
                    date:
                    {
                      Day: 10,
                      Month: 29,
                      Year: 2016,
                      ToString() { return this.Day + "/" + this.Month + "/" + this.Year}
                    },
                    patientName: "James Jones",
                    symptoms: "",
                    status: 0
                  },
                  {
                    id: 2,
                    date:
                    {
                      Day: 6,
                      Month: 15,
                      Year: 2017,
                      ToString() { return this.Day + "/" + this.Month + "/" + this.Year}
                    },
                    patientName: "Alex Kim",
                    symptoms: "",
                    status: 1
                  },
                  {
                    id: 3,
                    date:
                    {
                      Day: 12,
                      Month: 5,
                      Year: 2017,
                      ToString() { return this.Day + "/" + this.Month + "/" + this.Year}
                    },
                    patientName: "Sam Wan",
                    symptoms: "",
                    status: 2
                  }
            ]
        };
    }

    userUpdaterHandler(bundledUser) {
      this.setState( () => ({user: bundledUser}) );
      alert("Your information has been updated!");
    }
    
    render(props) {
        console.log(this.props.viewSelector);     
        return (                          
            <div id="body">
            { (this.props.viewSelector==0) && <ProfileView userInfo={this.state.user} isDoctor={this.props.isDoctor} />}
            { (this.props.viewSelector==1) && <EditProfile userInfo={this.state.user} userUpdater={this.userUpdaterHandler}/>}            
            { (this.props.viewSelector==2) && <PendingRequests requests={this.state.pendingRequests} />}
            { (this.props.viewSelector==3) && <AcceptedRequests requests={this.state.acceptedRequests} />}
            { (this.props.viewSelector==4) && <RejectedRequests requests={this.state.rejectedRequests} />}
            { (this.props.viewSelector>4) && <ProfileView userInfo={this.state.user} isDoctor={this.props.isDoctor} />}
            </div>
        );
    }
}