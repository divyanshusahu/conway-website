import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./redux/store";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// views without layouts

import Landing from "views/Landing.js";
import Profile from "views/Profile.js";
import Index from "views/Index.js";
import FAQ from "views/Faq.js";

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        {/* add routes with layouts */}
        <Route path="/admin" component={Admin} />
        <Route path="/auth" component={Auth} />
        {/* add routes without layouts */}
        <Route path="/landing" exact component={Landing} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/" exact component={Index} />
        <Route path="/faq" exact component={FAQ} />
        {/* add redirect for first page */}
        <Redirect from="*" to="/" />
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
