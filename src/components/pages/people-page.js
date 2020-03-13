import React, { Component } from 'react';

import Row from './../row';
import ErrorBoundary from './../error-boundary';
import {
  PersonList,
  PersonDetails
} from './../sw-components';

export default class PeoplePage extends Component {

  state = {
    selectedItem: null
  };

  onItemSelected = (id) => {
    this.setState({
      selectedItem: id
    });
  };

  render() {
    const personList = <PersonList onItemSelected={this.onItemSelected} />;

    const personDetails = (
      <ErrorBoundary>
        <PersonDetails itemId={this.state.selectedItem} />
      </ErrorBoundary>
    );

    return (
      <Row left={personList} right={personDetails} />
    );
  }
}
