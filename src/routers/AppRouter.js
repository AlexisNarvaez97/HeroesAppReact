import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRouter } from "./DashboardRouter";
import { PrivateRoutes } from "./PrivateRoutes";
import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {

  const { user } = useContext(AuthContext);

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute exact path="/login" component={LoginScreen} isAuthenticated={ user.logged } />
          <PrivateRoutes path="/" component={DashboardRouter} isAuthenticated={ user.logged } />
        </Switch>
      </div>
    </Router>
  );
};
