import React, { Component } from "react";
import NavBar from "../NavBar";
import AppRedesign from "../projects/AppRedesign";

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      projectLists: [1, 2, 3, 4, 5, 6, 7]
    };
  }
  AppRedesign = () => {
    this.props.history.push("/appRedesign");
  };
  render() {
    return (
      <div className="projectContainer bg-dark  ">
        <div className=" d-flex justify-content-center ">
          <NavBar />
        </div>

        <div class="container p-5">
          <div class="row m-2">
            <div class="col-lg m-1 projectItem pic" />
            <div
              className="col-lg m-1 projectItem  appRedesign "
              onClick={this.AppRedesign}
            >
              <div className="bg-warning appExplain">Whatsapp App redesign</div>
            </div>
            <div class="col-lg  m-1 projectItem">One of three columns</div>
          </div>
          <div class="row m-2">
            <div class="col-lg m-1 projectItem">One of three columns</div>
            <div class="col-lg m-1 projectItem">One of three columns</div>
            <div class="col-lg m-1 projectItem">One of three columns</div>
          </div>
          <div class="row m-2">
            <div class="col-lg m-1 projectItem ">One of three columns</div>
            <div class="col-lg m-1 projectItem pic" />
            <div class="col-lg m-1 projectItem">One of three columns</div>
          </div>
          <div class="row m-2">
            <div class="col-lg m-1 projectItem">One of three columns</div>
            <div class="col-lg m-1 projectItem">One of three columns</div>
            <div class="col-lg m-1 projectItem">One of three columns</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
