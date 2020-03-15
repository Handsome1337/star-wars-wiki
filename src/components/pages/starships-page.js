import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  StarshipList
} from './../sw-components';

const StarshipsPage = ({ history }) => {
  return (
    <StarshipList onItemSelected={(id) => history.push(id)} />
  );
};

export default withRouter(StarshipsPage);
