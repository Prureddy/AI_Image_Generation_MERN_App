import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { logo } from './assets';
import { Home, CreatePost, ContactUs } from './page';

const App = () => (
  <BrowserRouter>
     <header className="w-full flex justify-between items-center bg-[#121212] sm:px-8 px-4 py-6 border-b border-[#070707]">
      {/* Replace the img tag with your name element */}
      <span className="text-3xl font-bold text-[#1DB954]">ImaginAI</span>

      <div className="flex gap-6"> {/* Use flex container to control the gap */}
        <Link to="/create-post" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">Create</Link>
        <Link to="/contact-us" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">Contact us</Link>
      </div>
    </header>
    <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/contact-us" element={<ContactUs />} />

      </Routes>
    </main>
    <footer className="w-full text-center py-4 text-white bg-[#121212] border-t border-[#070707]">
      &copy; {new Date().getFullYear()} Pruthvi. All rights reserved.
    </footer>
  </BrowserRouter>
);

export default App;
