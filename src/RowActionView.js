import './App.css';
import React, { createContext, useContext, Component } from 'react';
import { SmallContext } from './small-context.js';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

/*async grabPattern = query => {
    let response = await fetch(query, {method: 'GET', redirect: 'follow'});
    if (response.ok) { // if HTTP-status is 200-299
    // get the response body (the method explained below)
    let json = await response.json();
  } else {
    alert("HTTP-Error: " + response.status);
  }};*/
var partArr = [''];

class RowActionView extends Component {
    static contextType = SmallContext;
    state = {
        instructions: [],
        currentTicker:0
      }
    updateParentCount(newCount) {
      this.setState({currentTicker: newCount})
    }
    componentDidMount (){
      let context = this.context;
      // const MmyContext = React.useContext(SmallContext);
      var query = context.query;

      var query_code = query.split("/").pop();

      fetch(query)
      .then(res => res.json())
      .then((data) =>{
          var enterVal = data[query_code]
          enterVal = enterVal.replaceAll("\\\\", "\\").replaceAll("/", "of").replaceAll('"rows":1}', '"rows":1},').replaceAll('"rows":1},,', '"rows":1},').replace(/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, "").replaceAll('"rows":1},}', '"rows":1}}'));

          console.log(enterVal)
        }
      )
    }
    constructor(props) {
        super(props);
      }
    render(){

        return(<Grid container spacing={3}>
            <Grid item xs={12}>
            </Grid>
            <Grid item xs={6}>
              <Counter />
              <p>Current instructions are {this.state.instructions[1]}</p>

            </Grid>
            <Grid item xs={6}>
             {
               Object.keys(this.state.instructions).map(item =>
                <p><b>{item}</b> {this.state.instructions[item]["part"]} {this.state.instructions[item]["instructions"]} {this.state.instructions[item]["rows"]}</p>
               )
             }

            </Grid>
          </Grid>);
    }
}

class Counter extends Component {

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
        backgroundColor: "gray",
        padding: "15px 32px",
        margin: "15px",

      };

      return (
      <div>
         <form id="findnumrows" onSubmit={this.handleSubmit}>
            <label htmlFor="new-todo">
              Number of Rows?
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



export default RowActionView;
