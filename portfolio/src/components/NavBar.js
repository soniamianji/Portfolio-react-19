import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/nav.css";
class NavBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className=" bg-dark d-flex justify-content-end">
        <div className="container">
          <nav className="nav">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link onClick={this.props.sendUp} to="/">
                  About Me
                </Link>
              </li>
              <li>
                <Link onClick={this.props.sendUp} to="/">
                  Contact Me
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default NavBar;
