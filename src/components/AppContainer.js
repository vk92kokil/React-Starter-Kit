import React, { Component } from 'react';
import { connect } from 'react-redux';
class AppContainer extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <h1>Yahooooooooooo.</h1>
        {this.props.children}
      </div>
    );
  }
}
export default connect(state => state)(AppContainer);
