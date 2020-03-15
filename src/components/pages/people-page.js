import React from 'react';
import { withRouter } from 'react-router-dom';

import Row from './../row';
import ErrorBoundary from './../error-boundary';
import {
  PersonList,
  PersonDetails
} from './../sw-components';

const PeoplePage = ({ history, match }) => {
  const { id } = match.params;

  const personList = <PersonList onItemSelected={(id) => history.push(id)} />;

  const personDetails = (
    <ErrorBoundary>
      <PersonDetails itemId={id} />
    </ErrorBoundary>
  );

  return (
    <Row left={personList} right={personDetails} />
  );
};

export default withRouter(PeoplePage);
