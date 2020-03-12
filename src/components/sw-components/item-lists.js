import React from 'react';

import ItemList from './../item-list';
import { withData, withChildFunction } from './../hoc-helpers';
import SwapiService from './../../services/swapi-service';

const swapiService = new SwapiService();

const {
  getAllPeople,
  getAllPlanets,
  getAllStarships
} = swapiService;

const renderName = ({ name }) => <span>{ name }</span>
const renderModelAndName = ({ name, model }) => <span>{ name } ({ model })</span>

const PersonList = withData(
                    withChildFunction(ItemList, renderName),
                    getAllPeople);
const PlanetList = withData(ItemList, getAllPlanets);
const StarshipList = withData(
                      withChildFunction(ItemList, renderModelAndName),
                      getAllStarships);

export {
  PersonList,
  PlanetList,
  StarshipList
};
