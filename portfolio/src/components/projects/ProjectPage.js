import React, { Component } from "react";
import "../../styles/projectPage.css";
// import { Slide } from "react-slideshow-image";
import Data from "../../rawData/projectPageInfo.js";

class ProjectPage extends Component {
  constructor(props) {
    super(props);
    const result = Data.filter(
      obj => obj.title === this.props.match.params.title
    );
    this.state = {
      data: result[0]
    };
  }

  render() {
    const data = this.state.data.data;
    return (
      <div className="container-fluid justify-content-center bg-dark pt-5 ">
        <ul class="list-group list-group-flush w-75 mx-auto pb-4">
          <li class="list-group-item bg-dark text-white">{data.header}</li>
          <li class="list-group-item border-bottom border-secondary bg-dark text-white">
            <div className="row">
              <div className="col-sm-8">Role: {data.role}</div>
              <div className="col-sm-4">Year: {data.date}</div>
            </div>
          </li>
        </ul>

        {data &&
          data.content.map((item, i) => {
            return item.type === "text" ? (
              <div>{""}</div>
            ) : item.type === "img" ? (
              item.src.map((pic, i) => {
                return (
                  <React.Fragment>
                    <div className="text-center w-75 mx-auto">
                      {<img className="image" src={pic} />}
                    </div>
                  </React.Fragment>
                );
              })
            ) : (
              ""
            );
          })}
      </div>
    );
  }
}

export default ProjectPage;
