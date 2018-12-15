import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import GlobalStyle from "./GlobalStyle";

import HomeScreen from "./screens/HomeScreen";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";

const AppRouter = () => (
  <Router>
    <React.Fragment>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={HomeScreen} />
        <Route path="/login" component={SignInScreen} />
        <Route path="/register" component={SignUpScreen} />
      </Switch>
    </React.Fragment>
  </Router>
);

export default AppRouter;
