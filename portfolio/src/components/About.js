import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div class="textAboutWrapper">
        <div className="row">
          <div className="col-sm-12 ">
            <h2 className="pl-5 pt-5">Hi there!</h2>

            <p className="parag">
              My name is Sonia Mianji Johnsson. I am born in 91 and I currently
              reside in Jönköping Sweden where I am enrolled in New Media Design
              at Jönköping University. As the name might suggest its an
              interdisciplinary education where I am acquiring skill sets
              ranging from project management, brand development, graphic
              design, motion graphics, UX-design with an emphasis on programming
              and web development.
            </p>

            <p className="parag">
              I am very tenacious in my pursuit of knowledge. Programming and
              web-development is my primary focus and interest. I am a good team
              player and as such I aspire to one day assemble my own brilliant
              team of highly skilled codemonkeys and together we will make it
              our business to improve the human experience by one line of code
              at the time.
            </p>
            <p className="parag">
              Below you can see my ever expanding skill set.
            </p>
          </div>
        </div>
        <div className=" skillset row parag">
          <div className="col-sm-12">
            <h4>Tech</h4>
            <h6>UX and Prototyping tools:</h6>
            <p>XD, Figma, Sketch</p>
            <h6>Graphics and motion graphics:</h6>
            <p>
              Adobe PhotoShop, Illustrator, InDesign, Premiere, AfterEffect.
            </p>

            <h6>Languages:</h6>
            <p>PHP, JavaScript, HTML / CSS / SaSS.</p>

            <h6>DBs:</h6>
            <p>MongoDB, Mysql, SQL.</p>

            <h6>LIBS:</h6>
            <p>
              Frameworks & SSE´s: NodeJS. Express.js, React, Bootstrap,
              Wordpress, Phaser.
            </p>

            <h6>Versioning Tools:</h6>
            <p>GIT.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
