import React from "react";
   import ReactDOM from "react-dom";
   import { BrowserRouter, Route, Switch } from "react-router-dom";

   import Home from "./Home"
   import DrivePage from "./DrivePage";
   
    const rootElement = document.getElementById("root");
    ReactDOM.render(
      <BrowserRouter>
       <Switch>
        <Route exact path="/" component={Home} id="HomePath"></Route>
        <Route exact path="/drive" component={DrivePage}></Route>
      </Switch>
      </BrowserRouter>,
      rootElement
    );