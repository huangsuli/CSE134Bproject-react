import React from 'react';

function setStatus(st) {
    if(st == 0)
      return "\u2612 Rejected";
    else if (st == 1)
      return "\u2611 Approved";
    else
      return "\u2610 Pending"
}

function showList(divName) {
    document.getElementById(divName).style.display= "block";
}

function hideList(divName) {
    if(document.getElementById(divName) != undefined) {
        document.getElementById(divName).style.display= "none";
    }
}

const RequestHistory = (props) => {
    console.log("In RequestHistory: ");
    console.log(props.requests);
    return (
        <div className="article" id="requestHistory">
            <div className="article_title">
                <h3>Request History</h3>
            </div>

            <div className="info_container roboto">
                <table id="historyTable" >
                <tbody>
                    <tr>
                        <td>#</td>    
                        <th>Date</th>    
                        <th>Doctor</th>    
                        <th>Status</th> 
                    </tr>
                    {
                        props.requests.slice().reverse().map( (request) => {
                                return (
                                    <tr key={request.id} onMouseOver={(e)=>(showList("request_"+request.id))} onMouseOut={(e) => (hideList("request_"+request.id))}>
                                        <th>{request.id}</th>
                                        <td>{request.date.ToString()}</td>
                                        <td>{request.doctorName}</td>
                                        <td>{setStatus(request.status)}
                                            <ul id={"request_"+request.id} className="todo_list">
                                                <li className="list_title">History Log</li>
                                                {
                                                    request.log.map( (todo) => {
                                                        return(
                                                            <li key={todo}>{todo}</li>
                                                        )
                                                    }

                                                    )

                                                }
                                            </ul>
                                        </td>
                                    </tr>)
                            }
                        )
                    }
                </tbody>
                </table>
            </div>
        </div>
    );
};

export default RequestHistory;