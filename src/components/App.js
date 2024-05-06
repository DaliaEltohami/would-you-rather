import { connect } from "react-redux";
import React from "react";
import { handleInitialData } from "../actions/shared";
import { Fragment } from "react";
import LoadingBar from "react-redux-loading";
import Dashboard from "./Dashboard";
import Nav from "./Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AnsweredPoll from "./AnsweredPoll";
import UnansweredPoll from "./UnansweredPoll";
import NewPoll from "./NewPoll";
import LeaderBoard from "./LeaderBoard";
import Login from "./Login";
import { Redirect } from "react-router-dom";
import Questions from "./Questions";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
    console.log("mounted");
  }

  render() {
    const { loading, authedUser } = this.props;
    console.log(loading);
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <LoadingBar />
        {loading === true ? null : (
          <Fragment>
            <div className="container">
              <Nav />
              <Route
                path="/"
                exact
                render={() => {
                  return authedUser !== null ? (
                    <Dashboard />
                  ) : (
                    <Redirect to="/login" />
                  );
                }}
              />
              <Route
                path="/questions/:id"
                render={({ location }) => {
                  return authedUser !== null ? (
                    <Questions />
                  ) : (
                    <Redirect
                      to={{
                        pathname: "/login",
                        state: { from: location.pathname },
                      }}
                    />
                  );
                }}
              />
              <Route
                path="/add"
                render={({ location }) => {
                  return authedUser !== null ? (
                    <NewPoll />
                  ) : (
                    <Redirect
                      to={{
                        pathname: "/login",
                        state: { from: location.pathname },
                      }}
                    />
                  );
                }}
              />
              <Route
                path="/leaderboard"
                render={({ location }) => {
                  return authedUser !== null ? (
                    <LeaderBoard />
                  ) : (
                    <Redirect
                      to={{
                        pathname: "/login",
                        state: { from: location.pathname },
                      }}
                    />
                  );
                }}
              />
              <Route path="/login" render={({ location }) => <Login />} />
            </div>
          </Fragment>
        )}
      </Router>
    );
  }
}

function mapStateToProps({ loading, authedUser }) {
  return {
    loading,
    authedUser,
  };
}

export default connect(mapStateToProps)(App);
