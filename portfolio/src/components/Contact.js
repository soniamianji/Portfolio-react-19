import React, { Component } from "react";
import "../styles/contact.css";

class Contact extends Component {
  render() {
    return (
      <div className="contactBoxes">
        <a href="https://github.com/soniamianji">
          <div className="contactBoxes__git" />
        </a>

        <a href="mailto:soniamianji1@gmail.com">
          <div className="contactBoxes__mail" />
        </a>

        <a href="https://www.linkedin.com/in/sonia-mianji-b8750258/">
          <div className="contactBoxes__linkedIn" />
        </a>
      </div>
    );
  }
}

export default Contact;
