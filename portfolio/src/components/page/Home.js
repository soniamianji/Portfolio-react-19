import React, { Component } from "react";
import NavBar from "../NavBar";
import Contact from "../Contact";
import About from "../About";
import Projects from "./Projects";
import {
  AwesomeButton,
  AwesomeButtonProgress,
  AwesomeButtonSocial
} from "react-awesome-button";
import { AwesomeButtonStyles } from "react-awesome-button/src/styles/themes/theme-eric/styles.scss";

class Home extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  scrollToMyRef = () => {
    window.scrollTo(0, this.myRef.current.offsetTop);
  };

  doSomethingThenCall = () => {
    this.props.history.push("/projects");
  };
  render() {
    return (
      <div>
        <section className="homepage bg-dark d-flex justify-content-center">
          <h1 className="myName position-absolute display-2 pt-5">
            Sonia Mianji Johnsson
          </h1>
        </section>

        <section className="about row bg-white">
          <div className="leftSideAbout bg-warning col-md ">
            <h2 className="sectionText d-flex justify-content-center display-2 pt-5">
              About
            </h2>
          </div>
          <div className="col-md rightSideAbout bg-white">
            <About />
          </div>
        </section>

        <section className="projects row bg-white">
          <div className="leftSideprojects d-flex justify-content-center bg-white col-md ">
            <h2 className="sectionText position-absolute display-2 pt-5">
              Works
            </h2>
            <div className="linkBtn position-absolute">
              <AwesomeButtonProgress
                type="secondary"
                size="large"
                cssModule={AwesomeButtonStyles}
                action={(element, next) => this.doSomethingThenCall(next)}
              >
                See More!
              </AwesomeButtonProgress>
            </div>
          </div>
          <div className="rightSideprojects col-md" />
        </section>

        <section id="contactMe" className="contact row bg-white">
          <div className="leftSideContact d-flex justify-content-center bg-warning col-md">
            <h2
              className="sectionText  display-2 pt-5 
"
            >
              Contact me
            </h2>
          </div>
          <div className="rightSideContact  bg-white col-md">
            <Contact />
          </div>
        </section>

        <section className="lastSection bg-dark" />
      </div>
    );
  }
}

export default Home;
