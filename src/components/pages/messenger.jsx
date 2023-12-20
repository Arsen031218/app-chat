import React from 'react';
import "../../styles/messenger.css"

const Messenger = () => {
    return (
        <div>


            <section>
                <h2>Messages</h2>
                <table>
                    <thead>
                    <tr>
                        <th>Date</th>
                        <th>Sender</th>
                        <th>Message</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>23-12-2023</td>
                        <td>Arsen Rysbayev</td>
                        <td>This is a sample message.</td>
                    </tr>

                    </tbody>
                </table>
            </section>



                <section>
                    <h2>Send a Message</h2>
                    <form id="messageForm">
                        <label htmlFor="recipient">Recipient:</label>
                        <input type="text" id="recipient" name="recipient" required placeholder="Enter recipient's name"/>
                            <br/>

                                <label htmlFor="message">Message:</label>
                                <textarea id="message" name="message" rows="4" required placeholder="Type your message here"></textarea>
                                <br/>

                                    <button className="button" type="submit">Send</button>
                    </form>
                </section>




        </div>
    );
};

export default Messenger;