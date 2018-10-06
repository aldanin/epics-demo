import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import * as actions from './actions'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Age-label">
          your age: <span>{this.props.age}</span>
        </div>
        <button onClick={this.props.onInc}>Inc</button>
        <button onClick={this.props.onDec}>Dec</button>
        <button onClick={this.props.onIncAsync}>IncAsync</button>
          <div>
              <div>Controls</div>
              <button onClick={this.props.onCancel}>Cancel</button>
              <button onClick={this.props.onContinue}>Continue</button>
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    age: state.counter
  };
};

const mapDispachToProps = dispatch => {
  return {
      onInc: () => dispatch(actions.increment(1)),
      onDec: () => dispatch(actions.decrement(1)),
      onIncAsync: () => dispatch(actions.asyncIncrement(1)),
      onCancel: () => dispatch(actions.control({command: 'cancel'})),
      onContinue: () => dispatch(actions.control({command: 'continue'})),
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(App);
