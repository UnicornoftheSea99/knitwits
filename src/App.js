import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { render } from '@testing-library/react';

/* hell yeah. canyou see me typing here */

class App extends Component {
  render(){
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <h1> KnitWits </h1>
        {/* <h2> dropdown for part, i am lazy and dont know the tags</h2>        */}
      {/* </header> */}
      <div>
        <Counter />
      </div>
      {/* <p> under the thingy goes optional stitch instructions whee </p> */}
    </div>
  );
}
}


class Counter extends Component {
  state = {
    count: 0,
    left: 10
  };
  addClick = () => {
    this.setState(({ count,left }) => ({
      count: count + 1,
      left: left -1
    }));
  };
  minusClick = () => {
    this.setState(({ count,left }) => ({
      count: count - 1,
      left: left +1
    }));
  };
  render() {
    const mystyle = {
     display: "inline-block",
    };
    return (
    <div style={mystyle}>
      <button onClick={this.addClick}>+1</button>
      <p>Rows Completed: {this.state.count}</p>
      <p>Rows Left: {this.state.left}</p>
      <button onClick={this.minusClick}>-1</button>
    </div>
    )
  }
}




export default App;
