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
                        <td> This is a test! </td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
    );
}

export default PendingRequests;