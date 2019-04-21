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

const GlobalRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => <Component {...props} {...rest} />} />
);
class App extends Component {
  state = {
    sendUp: ""
  };
  refCallBack = sendUp => {
    this.setState({
      sendUp: sendUp
    });
  };
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavBar sendUp={this.state.sendUp} />
            <GlobalRoute
              exact
              path="/"
              refCallBack={this.refCallBack}
              component={Home}
            />
            <GlobalRoute exact path="/projects/" component={Projects} />
            <GlobalRoute path="/projects/:title" component={ProjectPage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
