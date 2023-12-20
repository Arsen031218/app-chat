import React from 'react';
import "../../styles/profile.css"

const Profile = () => {
    return (
        <div>


            <section>
                <h2>User Profile</h2>
                <img src="profile-picture.jpg" alt="Profile Picture"/>
                    <table>
                        <tr>
                            <th>Name</th>
                            <td>Arsen Rysbayev</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td>arsenrysbayev@gmail.com</td>
                        </tr>
                        <tr>
                            <th>Address</th>
                            <td>Abay St, Almaty, Kazakhstan</td>
                        </tr>
                    </table>
                    <h2>Bio</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit....</p>
                    <h2>Social Media</h2>
                    <ul>
                        <li><a href="https://twitter.com/johndoe" target="_blank">Twitter</a></li>
                        <li><a href="https://www.linkedin.com/in/johndoe" target="_blank">LinkedIn</a></li>

                    </ul>
            </section>



                <section>
                    <h2>Edit Profile</h2>
                    <form>
                        <label htmlFor="newName">New Name:</label>
                        <input type="text" id="newName" name="newName"/>
                            <br/>

                                <label htmlFor="newEmail">New Email:</label>
                                <input type="email" id="newEmail" name="newEmail"/>
                                    <br/>

                                        <button type="submit">Save Changes</button>
                    </form>
                </section>

                <section>
                    <h2>Change Password</h2>
                    <form>
                        <label for="currentPassword">Current Password:</label>
                        <input type="password" id="currentPassword" name="currentPassword"/>
                            <br/>

                                <label for="newPassword">New Password:</label>
                                <input type="password" id="newPassword" name="newPassword"/>
                                    <br/>

                                        <label for="confirmPassword">Confirm Password:</label>
                                        <input type="password" id="confirmPassword" name="confirmPassword"/>
                                            <br/>

                                                <button type="submit">Change Password</button>
                    </form>
                </section>


        </div>
    );
};

export default Profile;