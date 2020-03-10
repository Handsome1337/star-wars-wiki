import React, { Component } from 'react';

import Row from './../row';
import ErrorBoundary from './../error-boundary';
import ItemList from './../item-list';
import ItemDetails from './../item-details';
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
        getData={this.swapiService.getAllStarships}
        onItemSelected={this.onPersonSelected}>

        {(item) => `${item.name} (${item.birthYear})`}

      </ItemList>
    );

    const personDetails = (
      <ErrorBoundary>
        <ItemDetails
          itemId={this.state.selectedPerson}
          getData={this.swapiService.getStarship}
          getImageURL={this.swapiService.getStarshipImage} />
      </ErrorBoundary>
    );

    return (
      <Row left={itemList} right={personDetails} />
    );
  }
}
