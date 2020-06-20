import React from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import "./App.css";
import SignIn from "./components/signin";
import RecommendForm from "./components/recommendationform";
import Profile from "./components/userprofile";
import SignUp from "./components/signup"
import Strains from "./components/all-potlucks"
import Search from "./components/searchstrains"

function App() {
  return (
    <div className="App">
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/recommendationform" component={RecommendForm} />
      <Route path="/strain" components={Strains} />
      <Route path="/searchstrains" components={Search} />

      {/* Private Routes can be added here, just follow the templating format */}
      <Switch>
        <PrivateRoute exact path="/userprofile" component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
