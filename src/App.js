import React from 'react';
import {   Routes, Route } from 'react-router-dom';

import HomePage from "./components/pages/home_page";
import Messenger from "./components/pages/messenger";
import Profile from "./components/pages/profile";
import Settings from "./components/pages/settings";
import Navigation from "./components/Navigation/Navigation";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";

function App() {
  return (
      <div>
          <Navigation>

          </Navigation>
          <Routes>
        <Route path="/" element={<HomePage/>} />
              <Route path="/messenger" element={<Messenger/>} />
              <Route path="/profile" element={<Profile/>} />
              <Route path="/settings" element={<Settings/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/contact" element={<Contact/>} />
          </Routes>


          </div>
  );
}

export default App;
