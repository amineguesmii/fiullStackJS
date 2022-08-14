import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; 
import ComponentRenderer from "ComponentRenderer.js";



import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WelcomPage from "pages/welcomPage/welcomPage";
import MaladiePage from "pages/maladiePage/maladiePage"
import Empty from "pages/emptyPageTemplate/empty";
import GenePage from "pages/genePage/genePage";
import MutationPage from "pages/mutationPage/mutationPage";
import Login from "pages/Login/Login";
import Signup from "pages/Register/Signup";

export default function App() {

  return (
    <Router>
      <Switch>
        <Route path="/components/:type/:subtype/:name">
          <ComponentRenderer />
        </Route>
        <Route path="/components/:type/:name">
          <ComponentRenderer />
        </Route>
        
        <Route path="/maladie">
         <MaladiePage />
        </Route>

        <Route path="/gene">
         <GenePage />
        </Route>

        <Route path="/mutation">
         <MutationPage />
        </Route>

        <Route path="/login">
         <Login />
        </Route>
        
        <Route path="/signup">
         <Signup />
        </Route>
        
        
        
        <Route path="/empty">
         <Empty />
        </Route>
        <Route path="/">
         <WelcomPage />
        </Route>
      </Switch>
    </Router>
  );
}

