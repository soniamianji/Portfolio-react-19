import React, { Component } from "react";
import NavBar from "../NavBar";
import AppRedesign from "../projects/AppRedesign";
import "../../styles/projects.css";
import { Link } from "react-router-dom";

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      projectLists: [1, 2, 3, 4, 5, 6, 7]
    };
  }

  render() {
    return (
      <div className="projectContainer bg-dark  ">
        <div className=" d-flex justify-content-center ">
          <NavBar />
        </div>

        <div class="container p-5">
          <div class="row ">
            <div class="col-sm-6 col-md-6 col-lg-4 p-0 projectItems">
              <Link to="/appRedesign">
                <img
                  src={require("../../images/appRedesign.jpg")}
                  alt="appRedesign"
                  className="image"
                />

                <div class="middle">
                  <div class="text">
                    Some explanations regarding the project One
                  </div>
                </div>
              </Link>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-4 p-0 bg-warning projectItems">
              <img
                src={require("../../images/swiss.png")}
                alt="appRedesign"
                className="image"
              />
              <div class="middle">
                <div class="text">
                  Some explanations regarding the project One
                </div>
              </div>
              One of three columns
            </div>

            <div class="col-sm-6 col-md-6 col-lg-4 p-0 bg-white projectItems ">
              <img
                src={require("../../images/tut.png")}
                alt="appRedesign"
                className="image"
              />
              <div class="middle">
                <div class="text">
                  Some explanations regarding the project One
                </div>
              </div>
            </div>
          </div>

          <div class="row ">
            <div class="col-lg-8 p-0 bg-white projectItems">
              <img
                src={require("../../images/wine.jpg")}
                alt="appRedesign"
                className="image"
              />
              <div class="middle">
                <div class="text">
                  Some explanations regarding the project One
                </div>
              </div>
              col-8
            </div>
            <div class="col-sm-6 col-md-6 col-lg-4 p-0 bgCustom projectItems">
              <img
                src={require("../../images/appRedesign.jpg")}
                alt="appRedesign"
                className="image"
              />
              <div class="middle">
                <div class="text">
                  Some explanations regarding the project One
                </div>
              </div>
            </div>
          </div>
          <div class="row ">
            <div class="col-sm-6 col-md-6 col-lg-4 bg-warning projectItems">
              <img
                src={"../../images/infoGraph.png"}
                alt="appRedesign"
                className="image"
              />
              <div class="middle">
                <div class="text">
                  Some explanations regarding the project One
                </div>
              </div>
              One of three columns
            </div>
            <div class="col-sm-6 col-md-6 col-lg-4 bg-white projectItems">
              <img
                src={"../../images/swiss.png"}
                alt="appRedesign"
                className="image"
              />
              <div class="middle">
                <div class="text">
                  Some explanations regarding the project One
                </div>
              </div>
              One of three columns
            </div>
            <div class="col-sm-6 col-md-6 col-lg-4 bg-warning projectItems ">
              <img
                src={"../../images/wine.jpg"}
                alt="appRedesign"
                className="image"
              />
              <div class="middle">
                <div class="text">
                  Some explanations regarding the project One
                </div>
              </div>
              One of three columns
            </div>
          </div>
          <div class="row">
            <div class="col-lg-8 bgCustom  projectItems">
              <img src={"../.."} alt="appRedesign" className="image" />
              <div class="middle">
                <div class="text">
                  Some explanations regarding the project One
                </div>
              </div>
              col-8
            </div>
            <div class="col-sm-6 col-md-6 col-lg-4 bg-white projectItems">
              <img
                src={"../../images/infographic.png"}
                alt="appRedesign"
                className="image"
              />
              <div class="middle">
                <div class="text">
                  Some explanations regarding the project One
                </div>
              </div>
              col-4
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
