import React, { Component } from 'react';

import Spinner from './../spinner';

const withData = (View) => {
  return class extends Component {

    _cancelled = false;

    state = {
      data: null
    }

    componentDidMount() {
      this.update();
    }

    componentDidUpdate(prevProps) {
      if (this.props.getData !== prevProps.getData) {
        this.update();
      }
    }

    componentWillUnmount() {
      this._cancelled = true;
    }

    update() {
      this.props.getData()
      .then((data) => {
        !this._cancelled && this.setState({
        data
        })
      });
    }

    render() {
      const { data } = this.state;

      if (!data) {
        return <Spinner />;
      }

      return <View {...this.props} data={data} />
    }
  };
};

export default withData;
