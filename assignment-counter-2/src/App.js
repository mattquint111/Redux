import './App.css';
import { connect } from 'react-redux'
import DisplayCounter from './components/DisplayCounter';
import IncrementDecrement from './components/IncrementDecrement';
import AddSubtract from './components/AddSubtract';

function App(props) {
  return (
    <div className="App">

      <h1>Assignment-2</h1>
      <h2>Counter: {props.counter}</h2>
      <DisplayCounter />
      <IncrementDecrement />
      <br />
      <AddSubtract />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}

export default connect(mapStateToProps)(App)
