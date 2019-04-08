import React, { Component } from "react";
import "../../styles/appRedesign.css";
// import { Slide } from "react-slideshow-image";
import picOne from "../../images/whatsapp_01.jpg";
import picTwo from "../../images/whatsapp_02.jpg";
import Carousel from "nuka-carousel";

class AppRedesign extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="container-fluid bg-white ">
        <section className="topSection ">
          <Carousel dragging={true}>
            <img src={require("../../images/whatsapp_01.jpg")} />
            <img src={require("../../images/whatsapp_02.jpg")} />
          </Carousel>
        </section>
        <h2 className=" text-center text-dark mt-5 p-4">
          WhastsApp App-Redesign
        </h2>
        <section className="bottomSection d-flex justify-content-center">
          <div className="container w-75 text-left mb-5 mainText">
            <p className="p-0">
              App s a mobile app concept that combines recipes with groceries
              delivery. Users can place an order for Ready-to-Cook meal boxes,
              and follow a step-by-step recipe to prepare their own meals. The
              project spans a period of 4-days and includes conducting of user
              interviews, creating personas, scenarios, and usability testings.
              It is completed as part of week 1 project submission at General
              Assembly Singapore, User Experience Design Immersive (UXDI)
              programme. For more details on the research project, check out the
              documentation on Medium or test the high-fidelity prototype on
              InVision, accessible via the links below. Redesignor more details
              on the research project, check out the documentation on Medium or
              test the high-fidelity prototype on InVision, accessible via the
              links below. Redesign
            </p>
          </div>
        </section>
      </div>
    );
  }
}

export default AppRedesign;
