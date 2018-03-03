import React from 'react';

const ProfileView = (props) => {
    console.log("In ProfileView\n");
    console.log(props.userInfo);
    return (
        <div className="article" id="profile">

            <div className="article_title">
            <h3>Patient Profile information</h3>
            </div>

            <div className="info_container roboto">
                <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <td>{props.userInfo.fullName()}</td>
                    </tr>

                    <tr>
                        <th>Date of birth</th>
                        <td>{props.userInfo.Birthday.ToString()}</td>
                    </tr>

                    <tr>
                        <th>Email</th>
                        <td>{props.userInfo.Email}</td>
                    </tr>

                    <tr>
                        <th>Location</th>
                        <td>{props.userInfo.getLocation()}</td>
                    </tr>

                    <tr>
                        <th>Link to session</th>
                        <td>{props.userInfo.Session}</td>
                    </tr>

                    <tr class="last_tr">
                        <th>Gender</th>
                        <td>{props.userInfo.Gender}</td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProfileView;