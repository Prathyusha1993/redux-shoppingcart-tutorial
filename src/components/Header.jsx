import React from "react";
import Cart from "./Cart";
import "../styles/header.css";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";

const Header = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };
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
          <li>
            <Cart />
          </li>
          <li>
            <button onClick={logoutHandler} className="logout-btn">
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
