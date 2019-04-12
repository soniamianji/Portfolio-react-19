import React, { Component } from "react";

import ProjectPage from "../projects/ProjectPage";
import "../../styles/projects.css";
import { Link } from "react-router-dom";
import Data from "../../rawData/thumbnailInfo";

class Projects extends Component {
  constructor() {
    super();

    this.state = {
      data: Data
    };
  }

  render() {
    let content = this.state.data;
    let example = this.state.projectLists;
    let iterate = 2;
    const incremeantIterate = () => {
      iterate++;
    };
    const resetIterate = () => {
      iterate = 1;
    };
    const urlGenerator = title => {
      return "/projects/" + title;
    };
    return (
      <div className="projectContainer bg-dark  ">
        <div class="row p-5">
          {content &&
            content.map((item, i) => {
              return iterate == 5 ? (
                <React.Fragment>
                  <div class="col-sm-10 col-lg-8 p-0 projectItems">
                    <Link to={urlGenerator(item.title)}>
                      {<img src={item.image} className="image" />}
                      <div class="middle">
                        <div class="text">{item.description}</div>
                      </div>
                    </Link>
                  </div>

                  {resetIterate()}
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <div class="col-xs-12 col-sm-10 col-md-6 col-lg-4 p-0 projectItems">
                    <Link to={urlGenerator(item.title)}>
                      {<img src={item.image} className="image" />}
                      <div class="middle">
                        <div class="text">{item.description}"kossher"</div>
                      </div>
                    </Link>
                  </div>

                  {incremeantIterate()}
                </React.Fragment>
              );
            })}
        </div>
      </div>
    );
  }
}

export default Projects;
