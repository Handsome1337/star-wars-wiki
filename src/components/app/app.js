import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ErrorBoundary from './../error-boundary';
import Header from './../header';
import RandomPlanet from './../random-planet';
import { PeoplePage, PlanetsPage, StarshipsPage } from './../pages';
import SwapiService from './../../services/swapi-service';

import { SwapiServiceProvider } from './../swapi-service-context';

import './app.css';

import {StarshipDetails} from './../sw-components';

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

              <Route path="/"
                      render={() => <h2>Welcome to Star Wars Wiki</h2>}
                      exact />
              <Route path="/people" component={PeoplePage} />
              <Route path="/planets" component={PlanetsPage} />
              <Route path="/starships" component={StarshipsPage} exact />
              <Route path="/starships/:id"
                      render={
                        ({match}) => {
                          const { id } = match.params;
                          return <StarshipDetails itemId={id} />
                        }
                      } />

            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  }
};
