import React, { Component } from 'react';

import Spinner from './../spinner';
import SwapiService from './../../services/swapi-service';

import './item-details.css';

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{ label }</span>
      <span>{ item[field] }</span>
    </li>
  );
};

export { Record };

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
    if (this.props.itemId !== prevProps.itemId ||
        this.props.getData !== prevProps.getData ||
        this.props.getImageURL !== prevProps.getImageURL) {
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
    const content = hasData ? <ItemView item={item} image={image} children={this.props.children} /> : null;

    return (
      <div className="item-details card">
        { hint }
        { spinner }
        { content }
      </div>
    );
  }
}

const ItemView = ({ item, image, children }) => {
  const { name } = item;

  return (
    <React.Fragment>
      <img className="item-image"
        src={image}
        alt="item" />

      <div className="card-body">
        <h4>{ name }</h4>
        <ul className="list-group list-group-flush">
          {
            React.Children.map(children, (child) => {
              return React.cloneElement(child, {item});
            })
          }
        </ul>
      </div>
    </React.Fragment>
  );
}
