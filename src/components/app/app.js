import React, { Component } from 'react';

import ErrorBoundary from './../error-boundary';
import Header from './../header';
import RandomPlanet from './../random-planet';
import PeoplePage from './../people-page';
import SwapiService from './../../services/swapi-service';

import { SwapiServiceProvider } from './../swapi-service-context';

import './app.css';

export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      };
    });
  };

  render() {
    const planet = this.state.showRandomPlanet ?
      <RandomPlanet /> :
      null;

    return (
      <ErrorBoundary>
        <SwapiServiceProvider value={this.swapiService}>
          <div className="star-wars-wiki-app">
            <Header />
            { planet }

            <div className="row mb2 button-row">
              <button
                className="toggle-planet btn btn-warning btn-lg"
                onClick={this.toggleRandomPlanet}>
                Toggle Random Planet
              </button>
            </div>

            <PeoplePage />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  }
};
