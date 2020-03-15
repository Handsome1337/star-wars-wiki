import React, { Component } from 'react';

import ErrorBoundary from './../error-boundary';
import Header from './../header';
import RandomPlanet from './../random-planet';
import { PeoplePage, PlanetsPage, StarshipsPage } from './../pages';
import SwapiService from './../../services/swapi-service';

import { SwapiServiceProvider } from './../swapi-service-context';

import './app.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class App extends Component {

  swapiService = new SwapiService();

  render() {
    return (
      <ErrorBoundary>
        <SwapiServiceProvider value={this.swapiService}>
          <Router>
            <div className="star-wars-wiki-app">
              <Header />
              <RandomPlanet />

              <Route path="/people" component={PeoplePage} />
              <Route path="/planets" component={PlanetsPage} />
              <Route path="/starships" component={StarshipsPage} />

            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  }
};
