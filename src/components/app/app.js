import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ErrorBoundary from './../error-boundary';
import Header from './../header';
import RandomPlanet from './../random-planet';
import { PeoplePage, PlanetsPage, StarshipsPage, LoginPage, SecretPage } from './../pages';
import SwapiService from './../../services/swapi-service';

import { SwapiServiceProvider } from './../swapi-service-context';

import './app.css';

import {StarshipDetails} from './../sw-components';

export default class App extends Component {

  state = {
    isLoggedIn: false
  };

  swapiService = new SwapiService();

  onLogin = () => {
    this.setState({
      isLoggedIn: true
    });
  };

  render() {

    const { isLoggedIn } = this.state;

    return (
      <ErrorBoundary>
        <SwapiServiceProvider value={this.swapiService}>
          <Router>
            <div className="star-wars-wiki-app">
              <Header />
              <RandomPlanet />

              <Switch>
                <Route path="/"
                        render={() => <h2>Welcome to Star Wars Wiki</h2>}
                        exact />
                <Route path="/people/:id?" component={PeoplePage} />
                <Route path="/planets" component={PlanetsPage} />
                <Route path="/starships" component={StarshipsPage} exact />
                <Route path="/starships/:id"
                        render={
                          ({match}) => {
                            const { id } = match.params;
                            return <StarshipDetails itemId={id} />
                          }
                        } />
                <Route
                  path="/login"
                  render={() => (
                    <LoginPage
                      isLoggedIn={isLoggedIn}
                      onLogin={this.onLogin} />
                )}/>
                <Route path="/secret"
                        render={() => (
                  <SecretPage isLoggedIn={isLoggedIn} />
                )}/>

                <Route render={() => <h2>Page not found</h2>} />
              </Switch>

            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  }
};
