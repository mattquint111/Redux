import React from 'react'
import './App.css';
import DisplayCounter from './components/DisplayCounter';
import { connect } from 'react-redux'
import IncrementDecrementCounter from './components/IncrementDecrementCounter';
import AddSubtractCounter from './components/AddSubtractCounter';

function App(props) {
  return (
    <div>
      <h1>APP</h1>
      <h2>{props.cntr}</h2>
      <DisplayCounter />
      <IncrementDecrementCounter />
      <AddSubtractCounter />
    </div>
    
  );
}

const mapStateToProps = (state) => {
  return {
    cntr: state.counter
  }
}

export default connect(mapStateToProps)(App);
