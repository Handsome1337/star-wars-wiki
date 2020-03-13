import React, { Component } from 'react';

import Row from './../row';
import ErrorBoundary from './../error-boundary';
import {
  StarshipList,
  StarshipDetails
} from './../sw-components';

export default class StarshipsPage extends Component {

  state = {
    selectedItem: null
  };

  onItemSelected = (id) => {
    this.setState({
      selectedItem: id
    });
  };

  render() {
    const starshipList = <StarshipList onItemSelected={this.onItemSelected} />;

    const starshipDetails = (
      <ErrorBoundary>
        <StarshipDetails itemId={this.state.selectedItem} />
      </ErrorBoundary>
    );

    return (
      <Row left={starshipList} right={starshipDetails} />
    );
  }
}
