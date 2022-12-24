/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function Navbar() {
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow p-3 mb-5 bg-white rounded">
        <a className="navbar-brand" href="#">
          VULONGDOAN PIZZA
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
          style={{ flexDirection: "row-reverse" }}
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/login">
                {" "}
                <a className="nav-link" href="#">
                  Login
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart">
                <a className="nav-link" href="#">
                  Cart <span>{cartItems.length}</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
