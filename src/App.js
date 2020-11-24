import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";

import * as actions from "./redux/actions/auth";
import {
  Home,
  Login,
  Signup,
  Dashboard,
  Session,
  Account,
  About,
} from "./pages";

import "./App.css";

const App = (props) => {
  const history = useHistory();
  const { accType, isAuth } = props;
  let routes = (
    <>
      <Route path="/login" component={(props) => <Login {...props} />} />
      <Route path="/signup" component={(props) => <Signup {...props} />} />
    </>
  );

  if (isAuth) {
    routes = (
      <>
        <Route
          path="/dashboard"
          component={(props) => <Dashboard accType={accType} {...props} />}
        />
        <Route
          path="/account"
          component={(props) => <Account accType={accType} {...props} />}
        />
        <Route
          exact
          path="/session"
          component={(props) => <Session accType={accType} {...props} />}
        />
      </>
    );
  }

  // test
  const handleLogin = () => {
    props.login();
    history.push("/dashboard");
  };

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={(props) => <Home {...props} />} />
        {routes}
        <Route path="/about" component={(props) => <About {...props} />} />
        <Redirect to="/" />
      </Switch>
      <h1>app</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
const mapStateToPros = (state) => {
  return {
    isAuth: state.authReducer.isAuth,
    accType: state.authReducer.accType,
  };
};

const mapDispatchToProps = (dispatch) => ({
  login: () => dispatch(actions.login()),
  logout: () => dispatch(actions.logout()),
});
export default connect(mapStateToPros, mapDispatchToProps)(App);
