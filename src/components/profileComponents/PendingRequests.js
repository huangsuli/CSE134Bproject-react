import React from 'react';

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
                                        <td><button className="medium_blue_r_button table_button">Details</button></td>
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