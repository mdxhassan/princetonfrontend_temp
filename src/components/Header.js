// src/components/Header.js
import React from 'react';

function Header() {
  return (
    <header className="bg-white py-4 shadow-md">
      <div className="flex justify-center">
        <img 
          src="/path/to/logo.png" // Replace with the path to your logo image
          alt="Logo"
          className="h-10" // Adjust the height of the logo as needed
        />
      </div>
    </header>
  );
}

export default Header;
