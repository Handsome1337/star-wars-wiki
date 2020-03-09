import React, { Component } from 'react';

import Row from './../row';
import ErrorIndicator from'./../error-indicator';
import ItemList from './../item-list';
import PersonDetails from './../person-details';
import SwapiService from './../../services/swapi-service';

export default class PeoplePage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPerson: null,
    hasError: false
  };

  componentDidCatch() {
    this.setState({
      hasError: true
    });
  }

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    });
  };

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const itemList = (
      <ItemList
      getData={this.swapiService.getAllPeople}
      renderItem={({ name, gender, birthYear }) => `${name} (${gender}, ${birthYear})`}
      onItemSelected={this.onPersonSelected} />
    );

    const personDetails = <PersonDetails personId={this.state.selectedPerson} />;

    return (
      <Row left={itemList} right={personDetails} />
    );
  }
}
