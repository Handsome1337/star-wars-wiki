import React, { Component } from 'react';

import Spinner from './../spinner';
import SwapiService from './../../services/swapi-service';

import './item-details.css';

export default class ItemDetails extends Component {

  swapiService = new SwapiService();

  state = {
    item: null,
    image: null,
    loading: false
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  onItemLoaded = (item) => {
    const { getImageURL } = this.props;

    this.setState({
      item,
      image: getImageURL(item),
      loading: false
    });
  };

  updateItem() {
    const { itemId, getData } = this.props;
    if (!itemId) {
      return;
    }

    this.setState({
      loading: true
    });

    getData(itemId)
      .then(this.onItemLoaded);
  }

  render() {
    const { item, loading, image } = this.state;

    const notSelected = !item && !loading;
    const hasData = item && !loading;

    const hint = notSelected ? <span>Select a item from a list</span> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <PersonView person={item} image={image} /> : null;

    return (
      <div className="item-details card">
        { hint }
        { spinner }
        { content }
      </div>
    );
  }
}

const PersonView = ({ person, image }) => {
  const { name, gender, birthYear, eyeColor } = person;

  return (
    <React.Fragment>
      <img className="item-image"
        src={image}
        alt="Character" />

      <div className="card-body">
        <h4>{ name }</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender</span>
            <span>{ gender }</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year</span>
            <span>{ birthYear }</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color</span>
            <span> { eyeColor }</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}
