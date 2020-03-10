import React, { Component } from 'react';

import Row from './../row';
import ErrorBoundary from './../error-boundary';
import ItemList from './../item-list';
import ItemDetails, { Record } from './../item-details';
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
        <ItemDetails
          itemId={this.state.selectedPerson}
          getData={this.swapiService.getPerson}
          getImageURL={this.swapiService.getPersonImage}>

          <Record field="gender" label="Gender" />
          <Record field="birthYear" label="Birth Year" />
          <Record field="eyeColor" label="Eye Color" />

        </ItemDetails>
      </ErrorBoundary>
    );

    return (
      <Row left={itemList} right={personDetails} />
    );
  }
}
