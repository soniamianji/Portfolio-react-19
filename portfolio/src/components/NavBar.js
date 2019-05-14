import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/nav.css";
class NavBar extends Component {
  constructor(props) {
    super(props);
  }
  contactHandler = () => {
    this.props.setContactClicked(true);
  };
  aboutHandler = () => {
    this.props.setAboutClicked(true);
  };
  render() {
    return (
      <div className="d-flex bg-light justify-content-end">
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
                <Link to="/" onClick={this.aboutHandler}>
                  About Me
                </Link>
              </li>
              <li>
                <Link to="/" onClick={this.contactHandler}>
                  Contact me
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
