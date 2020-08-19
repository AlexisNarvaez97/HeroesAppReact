import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Navbar } from "../components/ui/NavBar";

import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { HeroesScreen } from "../components/heroes/HeroesScreen";
import { DcScreen } from "../components/dc/DcScreen";

export const DashboardRouter = () => {
  return (
    <>
      <Navbar />

      <div>
        <Switch>
          <Route exact path="/marvel" component={MarvelScreen} />
          <Route exact path="/heroe/:heroeId" component={HeroesScreen} />
          <Route exact path="/dc" component={DcScreen} />
          <Redirect to="/marvel"/>
        </Switch>
      </div>
    </>
  );
};