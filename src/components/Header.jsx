import React from "react";
import Cart from "./Cart";
import "../styles/header.css";

const Header = () => {
  return (
    <header>
      <nav className="header-nav">
        <ul className="header-ul">
          <li>
            <h2
              className="header-h2"
              style={{ fontFamily: "monospace", fontSize: "30px" }}
            >
              {" "}
              Redux SHopping App
            </h2>
          </li>
          <Cart />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
