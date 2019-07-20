import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/nav.css";
class NavBar extends Component {
  constructor(props) {
    super(props);
  }
  // componentDidMount() {
  //   // use the node ref to create the animation
  //   this.myTween
  //     .to(this.myElement, 0.5, { x: 100 })
  //     .to(this.myElement, 0.5, { y: 100, rotation: 180 })
  //     .play();
  // }
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
