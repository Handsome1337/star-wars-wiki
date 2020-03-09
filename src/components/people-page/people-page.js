import React, { Component } from 'react';

import Row from './../row';
import ErrorBoundary from './../error-boundary';
import ItemList from './../item-list';
import PersonDetails from './../person-details';
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
    const itemList = (
      <ItemList
        getData={this.swapiService.getAllPeople}
        onItemSelected={this.onPersonSelected}>

        {(item) => `${item.name} (${item.birthYear})`}

      </ItemList>
    );

    const personDetails = (
      <ErrorBoundary>
        <PersonDetails personId={this.state.selectedPerson} />
      </ErrorBoundary>
    );

    return (
      <Row left={itemList} right={personDetails} />
    );
  }
}
