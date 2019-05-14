import React, { Component } from "react";
import "./App.css";
import Home from "./components/page/Home";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import Projects from "./components/page/Projects";
import ProjectPage from "./components/projects/ProjectPage";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";
import GoogleFontLoader from "react-google-font-loader";

const GlobalRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => <Component {...props} {...rest} />} />
);
class App extends Component {
  state = {
    isContactClicked: false,
    isAboutClicked: false
  };
  setContactClicked = bool => {
    console.log("you clicked me");
    this.setState({
      isContactClicked: bool
    });
  };
  setAboutClicked = bool => {
    console.log("you clicked me");
    this.setState({
      isAboutClicked: bool
    });
  };
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavBar
              setContactClicked={this.setContactClicked}
              setAboutClicked={this.setAboutClicked}
            />
            <GlobalRoute
              exact
              path="/"
              refCallBack={this.refCallBack}
              component={Home}
              isContactClicked={this.state.isContactClicked}
              isAboutClicked={this.state.isAboutClicked}
              setContactClicked={this.setContactClicked}
              setAboutClicked={this.setAboutClicked}
            />
            <GlobalRoute
              exact
              path="/projects/"
              component={Projects}
              setAboutClicked={this.setAboutClicked}
              setContactClicked={this.setContactClicked}
            />
            <GlobalRoute
              path="/projects/:title"
              component={ProjectPage}
              setAboutClicked={this.setAboutClicked}
              setContactClicked={this.setContactClicked}
            />
            <GoogleFontLoader
              fonts={[
                {
                  font: "Dosis",
                  weights: [400, "400i"]
                },
                {
                  font: "Karla",
                  weights: [400, 700]
                }
              ]}
              subsets={["cyrillic-ext", "greek"]}
            />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
