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

const GlobalRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => <Component {...props} {...rest} />} />
);
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavBar />
            <GlobalRoute exact path="/" component={Home} />
            <GlobalRoute exact path="/projects/" component={Projects} />
            <GlobalRoute path="/projects/:title" component={ProjectPage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
