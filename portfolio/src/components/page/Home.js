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
    console.log("hey");
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
          <div className="position-absolute">
            <NavBar scroll={this.scrollToMyRef} />
          </div>
        </section>
        <section className="about row bg-white">
          <div className="leftSideAbout d-flex justify-content-center bg-warning col">
            <h2
              className="sectionText position-absolute display-2 pt-5 display-2
      "
            >
              About
            </h2>
          </div>
          <div className="rightSideAbout bg-white col">
            <About />
          </div>
        </section>

        <section className="projects row bg-white">
          <div className="leftSideprojects d-flex justify-content-center bg-white col ">
            <h2
              className="sectionText position-absolute display-2 pt-5 
  "
            >
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
          <div className="rightSideprojects col" />
        </section>

        <section
          ref={this.myRef}
          id="contactMe"
          className="contact row bg-white"
        >
          <div className="leftSideContact d-flex justify-content-center bg-warning col">
            <h2
              className="sectionTextContact position-absolute display-2 pt-5 
"
            >
              Contact me
            </h2>
          </div>
          <div className="rightSideContact  bg-white col">
            <Contact />
          </div>
        </section>

        <section className="lastSection bg-dark" />
      </div>
    );
  }
}

export default Home;
