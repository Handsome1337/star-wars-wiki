import React, { Component } from 'react';

import Row from './../row';
import ErrorBoundary from './../error-boundary';
import {
  PersonList,
  PersonDetails
} from './../sw-components';
import SwapiService from './../../services/swapi-service';

export default class PeoplePage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPerson: null
  };

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    });
  };

  render() {
    const personList = <PersonList onItemSelected={this.onPersonSelected} />;

    const personDetails = (
      <ErrorBoundary>
        <PersonDetails itemId={this.state.selectedPerson} />
      </ErrorBoundary>
    );

    return (
      <Row left={personList} right={personDetails} />
    );
  }
}
