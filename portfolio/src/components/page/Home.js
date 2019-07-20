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
import { AwesomeButtonStyles } from "react-awesome-button/src/styles/themes/theme-amber/styles.scss";

class Home extends Component {
  constructor(props) {
    super(props);
    this.myRef = null;
    this.aboutRef = null;
  }
  componentDidMount() {
    if (this.props.isContactClicked) {
      var scrollToMyRef = this.scrollToMyRef;
      scrollToMyRef();
      this.props.setContactClicked(false);
    }
    if (this.props.isAboutClicked) {
      var scrollToMyabout = this.scrollToMyabout;
      scrollToMyabout();
      this.props.setAboutClicked(false);
    }
  }
  componentDidUpdate() {
    if (this.props.isContactClicked) {
      var scrollToMyRef = this.scrollToMyRef;
      scrollToMyRef();
      this.props.setContactClicked(false);
    }
    if (this.props.isAboutClicked) {
      var scrollToMyabout = this.scrollToMyabout;
      scrollToMyabout();
      this.props.setAboutClicked(false);
    }
  }

  scrollToMyRef = () => {
    window.scrollTo({
      top: this.myRef.offsetTop,
      left: 0,
      behavior: "instant"
    });
  };
  scrollToMyabout = () => {
    window.scrollTo({
      top: this.aboutRef.offsetTop,
      left: 0,
      behavior: "instant"
    });
  };

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
        <section className="homepage">
          <div className="homepage--contentHolder">
            <h1 className="homepage__name">Sonia Mianji</h1>
            <h5 className="homepage__description">Web developer/UX designer</h5>
            <AwesomeButton
              type="primary"
              cssModule={AwesomeButtonStyles}
              size="large"
              className="homepage__button"
            >
              <a href="mailto:soniamianji1@gmail.com">Contact me!</a>
            </AwesomeButton>
          </div>
        </section>
        <section
          ref={ref => (this.aboutRef = ref)}
          className="about row bg-white"
        >
          <div className="about__leftSide bg-warning d-flex justify-content-center col-md ">
            <h2 className="about___leftSide__sectionText display-4">About</h2>
          </div>
          <div className="about__rightSide col-md  bg-white">
            <About />
          </div>
        </section>
        <section className="projects row bg-white">
          <div className="projects__leftSide d-flex justify-content-center bg-white col-md ">
            <h2 className="projects__leftSide__sectionText display-4">
              Works
              <div className="linkBtn position-absolute ">
                <AwesomeButtonProgress
                  type="link"
                  size="large"
                  cssModule={AwesomeButtonStyles}
                  action={(element, next) => this.doSomethingThenCall(next)}
                >
                  Check it out!
                </AwesomeButtonProgress>
              </div>
            </h2>
          </div>
          <div className="projects__rightSide col-md" />
        </section>

        <section
          ref={ref => (this.myRef = ref)}
          id={"#contact"}
          className="contact row bg-white"
        >
          <div className="contact__leftSide d-flex justify-content-center bg-warning col-md">
            <h2 className="contact__leftSide__sectionText  display-4">
              Contact
            </h2>
          </div>
          <div className="contact__rightSide bg-white col-md">
            <Contact />
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
