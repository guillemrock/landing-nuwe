import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Index from "./pages";
import Developers from "./pages/developers/developers";
import AppBar from "./components/AppBar";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Index />
        </Route>
        <Route>
          <DefaultComponent />
        </Route>
      </Switch>
    </Router>
  );
};
const DefaultComponent = () => (
  <>
    <AppBar />
    <Route exact path="/developers">
      <Developers />
    </Route>
    <Route exact path="/empresas">
      <Developers />
    </Route>
    <Route exact path="/coins">
      <Developers />
    </Route>
  </>
);

export default App;
