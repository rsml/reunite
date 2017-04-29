import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./store.js";
import App from "./components/App";
import ChooseDatePage from "./components/ChooseDatePage";
import ChooseTimePage from "./components/ChooseTimePage";
import ChooseLocationPage from "./components/ChooseLocationPage";
import SuccessPage from "./components/SuccessPage";
import NotFound from "./components/NotFound";

// build the router
const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={ChooseDatePage}/>
      <Route path="/choose-date" component={ChooseDatePage}/>
      <Route path="/choose-time" component={ChooseTimePage}/>
      <Route path="/choose-location" component={ChooseLocationPage}/>
      <Route path="/success" component={SuccessPage}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);

// export
export { router };
