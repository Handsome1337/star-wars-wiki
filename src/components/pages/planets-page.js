import React, { Component } from 'react';

import Row from './../row';
import ErrorBoundary from './../error-boundary';
import {
  PlanetList,
  PlanetDetails
} from './../sw-components';

export default class PlanetsPage extends Component {

  state = {
    selectedItem: null
  };

  onItemSelected = (id) => {
    this.setState({
      selectedItem: id
    });
  };

  render() {
    const planetList = <PlanetList onItemSelected={this.onItemSelected} />;

    const planetDetails = (
      <ErrorBoundary>
        <PlanetDetails itemId={this.state.selectedItem} />
      </ErrorBoundary>
    );

    return (
      <Row left={planetList} right={planetDetails} />
    );
  }
}
