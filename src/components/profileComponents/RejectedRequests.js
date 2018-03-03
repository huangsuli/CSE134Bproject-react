import React from 'react';

const RejectedRequests = (props) => {
    return (
        <div className="article" id="requestHistory">
            <div className="article_title">
                <h3>Rejected Requests</h3>
            </div>

            <div  className="info_container roboto">
                <table id="historyTable">
                <tbody>
                    <tr>
                        <td>#</td>    
                        <th>Date</th>    
                        <th>Patient</th>
                    </tr>

                    {
                        props.requests.slice().reverse().map( (request) => {
                                return (
                                    <tr key={request.id}>
                                        <th>{request.id}</th>
                                        <td>{request.date.ToString()}</td>
                                        <td>{request.patientName}</td>
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

export default RejectedRequests;