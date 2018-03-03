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
                        <td>This is a test!</td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
    );
}

export default RejectedRequests;