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
  componentDidMount = () => window.scrollTo(0, 0);

  componentDidUpdate = prevProps => {
    if (this.props.location !== prevProps.location) window.scrollTo(0, 0);
  };

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
      <div className="projectContainer bg-dark">
        <div class="projectItemHolder">
          {content &&
            content.map((item, i) => {
              return iterate == 5 ? (
                <React.Fragment>
                  <div className="p-0 projectItems thumb_big">
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
                  <div className=" p-0 projectItems thumb_small">
                    <Link to={urlGenerator(item.title)}>
                      {<img src={item.image} className="image" />}
                      <div class="middle">
                        <div class="text">{item.description}</div>
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
