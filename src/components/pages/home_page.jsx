import React from 'react';
import "../../styles/home_page.css"
import ChatList from "../Chat/chatlist";

const HomePage = () => {
    return (
        <div>

            <header>
                <h1>Chat App</h1>
                <p>Stay connected with another users in Chat.</p>
            </header>

            <section>
                <h2>Latest Updates</h2>
                <div>
                    <p>Check out our new features:</p>
                    <ul>
                        <li><span>New chat themes</span></li>
                        <li><span>Improved message delivery</span></li>
                    </ul>
                </div>
            </section>



            <section id="contact-form">
                <h2>Contact Us</h2>
                <form method="post">
                    <input type="text" name="name" placeholder="Your Name"/>
                        <input type="email" name="email" placeholder="Your Email"/>
                            <textarea name="message" placeholder="Your Message"></textarea>
                            <button type="submit">Submit</button>
                </form>
            </section>





<ChatList></ChatList>
            <footer>
                <p>&copy; 2023 Messenger App. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default HomePage;