import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-4">
        <li><a href="/">Home</a></li>
        <li><a href="/Contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;