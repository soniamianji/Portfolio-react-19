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
// import { AwesomeButtonStyles } from "react-awesome-button/src/styles/themes/theme-eric/styles.scss";
import { AwesomeButtonStyles } from "react-awesome-button/src/styles/themes/theme-amber/styles.scss";

class Home extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  scrollToMyRef = () => {
    console.log("go");
    const myref = this.myRef.current;
    window.scrollTo({
      top: myref.offsetTop,
      left: 0,
      behavior: "instant"
    });
  };
  componentDidMount() {
    this.props.refCallBack(this.scrollToMyRef);
  }
  // componentWillMount() {
  //   if (this.props.location.pathname !== "/") {
  //     this.scrollToMyRef();
  //   }
  // }
  doSomethingThenCall = () => {
    this.props.history.push("/projects");
  };
  render() {
    return (
      <div>
        <section className="homepage bg-dark d-flex justify-content-center">
          <h1 className="myName position-absolute display-3 ">
            Sonia Mianji Johnsson
            <div className="descHolder">
              <h3 className="yellowColor">Code Monkey in training</h3>
              <AwesomeButton
                type="primary"
                cssModule={AwesomeButtonStyles}
                size="large"
              >
                Hire me!
              </AwesomeButton>
            </div>
          </h1>
        </section>

        <section className="about row bg-white">
          <div className="leftSideAbout bg-warning d-flex justify-content-center col-md ">
            <h2 className="sectionText  display-4 pt-5">About</h2>
          </div>
          <div className="col-md rightSideAbout bg-white">
            <About />
          </div>
        </section>

        <section className="projects row bg-white">
          <div className="leftSideprojects d-flex justify-content-center bg-white col-md ">
            <h2 className="sectionText position-absolute d-flex justify-content-center display-4 pt-5">
              Works
              <div className="linkBtn position-absolute ">
                <AwesomeButtonProgress
                  type="link"
                  size="large"
                  cssModule={AwesomeButtonStyles}
                  action={(element, next) => this.doSomethingThenCall(next)}
                >
                  See More!
                </AwesomeButtonProgress>
              </div>
            </h2>
          </div>
          <div className="rightSideprojects col-md" />
        </section>

        <section
          ref={this.myRef}
          id={"#contact"}
          className="contact row bg-white"
        >
          <div className="leftSideContact d-flex justify-content-center bg-warning col-md">
            <h2
              className="sectionText position-absolute  display-4 pt-5 
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
