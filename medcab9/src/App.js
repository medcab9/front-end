import React from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import "./App.css";
import SignIn from "./components/signin";
import RecommendForm from "./components/recommendationform";
import RecommendList from "./components/recommendations";
import Profile from "./components/userprofile";
import SignUp from "./components/signup";
import Strains from "./components/strains";
// import SearchStrains from "./components/searchstrains";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/recommendationform" component={RecommendForm} />
      <Route path="/strains" component={Strains} />

      {/* Private Routes can be added here, just follow the templating format */}
      <Switch>
        <PrivateRoute exact path="/userprofile" component={Profile} />
        <PrivateRoute
          exact
          path="userprofile/recommendations"
          component={RecommendList}
        />
      </Switch>
    </div>
  );
}

export default App;
