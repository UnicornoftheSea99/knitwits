import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';


class App extends Component {

  render(){ 
  return (
    <div className="App">
      <header className="App-header">
        <h1> KnitWits </h1>
        <img src={'./IMG_0069.png'} />
      </header>
      <div>
        <Counter />
      </div>
    </div>
  );
}
}


class Counter extends Component {
  // state = {
  //   count: 0,
  //   left: 10
  // };
  constructor(props) {
    super(props);
    this.state = { count: 0, left:''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
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

  handleChange(e) {
    this.setState({ left: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    document.getElementById("findnumrows").style.display="none";
  }

  render() {
    const mystyle = {
     display: "inline-block",
     border: "none",
      color: "black",
      padding: "15px 32px",

    };
    return (
    <div>
       <form id="findnumrows" onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            What needs to be done?
          </label>
          <input
            id="numRowinput"
            onChange={this.handleChange}
            value={this.state.left}
          />
          <button type="submit">Set Number of Rows </button>
        </form>
      <button style={mystyle} onClick={this.addClick}>+1</button>
      <button style={mystyle} onClick={this.minusClick}>-1</button>
      <p>Rows Completed: {this.state.count}</p>
      <p>Rows Left: {this.state.left}</p>
    </div>
    )
  }
}




export default App;
