import React, { Component } from "react";
import { Link } from "react-router-dom";
class NavBar extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-md bg-transparent justify-content-center">
          <button
            className="navbar-toggler ml-1"
            type="button"
            data-toggle="collapse"
            data-target="#collapsingNavbar2"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="navbar-collapse collapse justify-content-between align-items-center w-100"
            id="collapsingNavbar2"
          >
            <ul className="navbar-nav mx-auto text-center">
              <li className="nav-item active">
                <Link className="nav-link textNav" to="/">
                  Home
                </Link>
                <span className="sr-only">Home</span>
              </li>
              <li className="nav-item">
                <Link className="nav-link textNav" to="/projects">
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link textNav" to="/">
                  Contact Me
                </Link>
              </li>
            </ul>
            <ul className="nav navbar-nav flex-row justify-content-center flex-nowrap">
              <li className="nav-item">
                <a className="nav-link" href="">
                  <i className="fa fa-facebook mr-1" />
                </a>{" "}
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  <i className="fa fa-twitter" />
                </a>{" "}
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
