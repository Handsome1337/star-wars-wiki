import React, { Component } from 'react';

import ErrorBoundary from './../error-boundary';
import Header from './../header';
import RandomPlanet from './../random-planet';
import { PeoplePage, PlanetsPage, StarshipsPage } from './../pages';
import SwapiService from './../../services/swapi-service';

import { SwapiServiceProvider } from './../swapi-service-context';

import './app.css';

export default class App extends Component {

  swapiService = new SwapiService();

  render() {
    return (
      <ErrorBoundary>
        <SwapiServiceProvider value={this.swapiService}>
          <div className="star-wars-wiki-app">
            <Header />
            <RandomPlanet />
            <PeoplePage />
            <PlanetsPage />
            <StarshipsPage />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  }
};
