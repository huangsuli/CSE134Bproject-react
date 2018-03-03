import React from 'react';

const ProfileView = (props) => {
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
                    <td id="info_name"></td>
                    </tr>

                    <tr>
                        <th>Date of birth</th>
                        <td id="info_bday"></td>
                    </tr>

                    <tr>
                    <th>Email</th>
                    <td id="info_email"></td>
                    </tr>

                    <tr>
                    <th>Location</th>
                    <td id="info_location"></td>
                    </tr>

                    <tr>
                    <th>Link to session</th>
                    <td id="info_session"></td>
                    </tr>

                    <tr class="last_tr">
                    <th>Gender</th>
                    <td id="info_gender"></td>

                    </tr>
                </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProfileView;