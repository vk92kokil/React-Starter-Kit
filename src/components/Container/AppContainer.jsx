import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
class AppContainer extends Component {
  static propTypes = {
    children: PropTypes.object,
  };
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
export default connect(state => state)(AppContainer);
