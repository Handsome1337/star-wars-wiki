import React from 'react';

import { SwapiServiceConsumer } from './../swapi-service-context';

const withSwapiService = (Wrapped, mapMethodToProps) => {
  return (props) => {
    return (
      <SwapiServiceConsumer>
        {
          (swapiService) => {
            const serviceProps = mapMethodToProps(swapiService);
            return (
              <Wrapped {...props} {...serviceProps} />
            );
          }
        }
      </SwapiServiceConsumer>
    );
  };
};

export default withSwapiService;
