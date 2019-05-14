import React, { Component } from "react";
import "../styles/contact.css";

class Contact extends Component {
  render() {
    return (
      <div className="contactBoxes">
        <a href="https://github.com/soniamianji">
          <div className="git" />
        </a>

        <a href="mailto:soniamianji1@gmail.com">
          <div className="mail" />
        </a>

        <a href="https://www.linkedin.com/in/sonia-mianji-b8750258/">
          <div className="linkedIn" />
        </a>
      </div>
    );
  }
}

export default Contact;
