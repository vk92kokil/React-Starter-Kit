import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';
export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <ReduxRouter />
      </Provider>
    );
  }
}
Root.propTypes = {
  store: React.PropTypes.object.isRequired,
};
