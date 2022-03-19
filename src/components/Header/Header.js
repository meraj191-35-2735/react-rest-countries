import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <h1>Welcome! To my Website</h1>
      <nav className="menu">
        <a href="/home">Home</a>
        <a href="/countries">Countries</a>
        <a href="/aboutUs">About Us</a>
      </nav>
    </div>
  );
};

export default Header;
