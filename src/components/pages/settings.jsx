import React from 'react';
import "../../styles/settings.css"
const Settings = () => {
    return (
        <div>
            <section>
                <h2>User Settings</h2>
                <form id="settingsForm">
                    <label htmlFor="enableNotifications">Enable Notifications:</label>
                    <input type="checkbox" id="enableNotifications" name="enableNotifications"/>
                        <br/>

                            <label>Choose Theme:</label>
                            <input type="radio" id="lightTheme" name="theme" value="light"/>
                                <label htmlFor="lightTheme">Light</label>
                                <input type="radio" id="darkTheme" name="theme" value="dark"/>
                                    <label htmlFor="darkTheme">Dark</label>
                                    <br/>

                                        <label htmlFor="languagePreference">Language Preference:</label>
                                        <select id="languagePreference" name="languagePreference">
                                            <option value="english">English</option>
                                            <option value="spanish">Spanish</option>
                                        </select>
                                        <br/>

                                            <button type="button" onclick="saveSettings()">Save Settings</button>
                </form>
            </section>
        </div>
    );
};

export default Settings;