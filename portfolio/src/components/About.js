import React, { Component } from "react";
import {
  AwesomeButton,
  AwesomeButtonProgress,
  AwesomeButtonSocial
} from "react-awesome-button";

import { AwesomeButtonStyles } from "react-awesome-button/src/styles/themes/theme-amber/styles.scss";

class About extends Component {
  state = {
    isHidden: true
  };
  knowMoreHandler = () => {
    console.log("yes");
    this.setState({
      isHidden: false
    });
  };
  knowLessHandler = () => {
    this.setState({
      isHidden: true
    });
  };
  render() {
    return (
      <div class="aboutWrapper">
        <div className="aboutwrapper__introAndPic">
          <div className="aboutwrapper__pic ">
            <img src={require("../images/about/sono.jpg")} />
          </div>
          <div className="aboutWrapper__intro">
            <h2 className="">Hi there!</h2>

            <p className="aboutWrapper__intro__parag">
              My name is Sonia Mianji Johnsson. I am born in 91 and I currently
              reside in Jönköping Sweden where I am enrolled in New Media Design
              at Jönköping University.
            </p>
          </div>
        </div>
        <div className="aboutWrapper__moreText">
          <p className="aboutWrapper__moreText__parag">
            As the name might suggest its an interdisciplinary education where I
            am acquiring skill sets ranging from project management, brand
            development, graphic design, motion graphics, UX-design with an
            emphasis on programming and web development. I am very tenacious in
            my pursuit of knowledge. Programming and web-development is my
            primary focus and interest. I am a good team player and as such I
            aspire to one day assemble my own brilliant team of highly skilled
            codemonkeys and together we will make it our business to improve the
            human experience by one line of code at the time.
          </p>

          {this.state.isHidden ? (
            " "
          ) : (
            <React.Fragment>
              <p className="aboutWrapper__moreText__parag">
                Below you can see my ever expanding skill set.
              </p>
              <h4>Tech</h4>
              <h6>UX and Prototyping tools:</h6>
              <p>XD, Figma, Sketch</p>
              <h6>Graphics and motion graphics:</h6>
              <p>
                Adobe PhotoShop, Illustrator, InDesign, Premiere, AfterEffect.
              </p>

              <h6>Languages:</h6>
              <p>PHP, JavaScript, HTML / CSS / SASS.</p>

              <h6>DBs:</h6>
              <p>MongoDB, Mysql, SQL.</p>

              <h6>LIBS:</h6>
              <p>
                Frameworks & SSE´s: NodeJS. Express.js, React, Bootstrap,
                Wordpress, Phaser.
              </p>

              <h6>Versioning Tools:</h6>
              <p>GIT.</p>
            </React.Fragment>
          )}
          <div className="about__rightSide__moretextButton">
            {this.state.isHidden ? (
              <AwesomeButton
                type="primary"
                cssModule={AwesomeButtonStyles}
                size="large"
                className="about__button"
                action={this.knowMoreHandler}
              >
                Skillsets
              </AwesomeButton>
            ) : (
              <AwesomeButton
                type="secondary"
                cssModule={AwesomeButtonStyles}
                size="large"
                className="about__button"
                action={this.knowLessHandler}
              >
                Know less!
              </AwesomeButton>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default About;
