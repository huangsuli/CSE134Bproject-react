import React from 'react';
import {  BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';


const PendingRequests = (props) => {
    return (
        <div className="article" id="pendingRequest">
            <div className="article_title">
                <h3>Pending Requests</h3>
            </div>
            <div className="info_container roboto">
                <table id="pendingTable">
                <tbody>
                    <tr>
                        <td>#</td>    
                        <th>Date</th>    
                        <th>Patient</th>    
                        <th></th> 
                    </tr>

                    {
                        props.requests.slice().reverse().map( (request) => {
                                return (
                                    <tr key={request.id}>
                                        <th>{request.id}</th>
                                        <td>{request.date.ToString()}</td>
                                        <td>{request.patientName}</td>
                                        <td><Link to="request_detailer"><button className="medium_blue_r_button table_button">Details</button></Link></td>
                                    </tr>)
                            }
                        )
                    }
                </tbody>
                </table>
            </div>
        </div>
    );
}

export default PendingRequests;