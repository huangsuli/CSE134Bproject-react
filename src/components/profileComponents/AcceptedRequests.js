import React from 'react';

const AcceptedRequests = (props) => {
    return (
        <div className="article" id="acceptedRequests">
            <div className="article_title">
                <h3>Accepted Requests</h3>
            </div>
            <div className="info_container roboto">
                <table id="acceptedTable">
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
                                        <td><button className="medium_blue_r_button table_button">Chat</button></td>
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

export default AcceptedRequests;