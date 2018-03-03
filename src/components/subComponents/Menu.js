import React from 'react';

const Menu = (props) => {    
    if(props.isDoctor) {
        return (
            <div id="menu">
                <div id="menu_container">
                    <a onClick={(e) => props.selectorChanger(0)}>Profile</a>
                    <a onClick={(e) => props.selectorChanger(1)}>Edit Profile</a>
                    <a onClick={(e) => props.selectorChanger(2)}>Pending Requests</a>
                    <a onClick={(e) => props.selectorChanger(3)}>Accepted Requests</a>
                    <a onClick={(e) => props.selectorChanger(4)}>Rejected Requests</a>
                </div>
            </div>
        );
    } else {
        console.log(props);
        return (
            <div id="menu">
                <div id="menu_container">
                    <a onClick={(e) => props.selectorChanger(0)}>Profile</a>
                    <a onClick={(e) => props.selectorChanger(1)}>Edit Profile</a>
                    <a onClick={(e) => props.selectorChanger(2)}>Make Request</a>
                    <a onClick={(e) => props.selectorChanger(3)}>Request History</a>
                </div>
            </div>
        );
    }
};

export default Menu;