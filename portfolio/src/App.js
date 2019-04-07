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
import AppRedesign from "./components/projects/AppRedesign";

const GlobalRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => <Component {...props} {...rest} />} />
);
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <GlobalRoute exact path="/" component={Home} />
            <GlobalRoute path="/projects" component={Projects} />
            <GlobalRoute path="/appRedesign" component={AppRedesign} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
