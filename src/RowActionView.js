import './App.css';
import React, { createContext, Component } from 'react';
import { SmallContext } from './small-context.js';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const MyContext = React.createContext();

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

    componentDidMount (){
        var query = '';
      switch(MyContext.chosenPattern){
          case 'scarf':
          query = 'https://knitwits.ue.r.appspot.com/api/get/-193436168588079716'
          break;
      case 'bee':
          query = 'https://knitwits.ue.r.appspot.com/api/get/-7378964869400283023'
          break;
      case 'plushie':
          query = 'https://knitwits.ue.r.appspot.com/api/get/-4778850897406943288'
          break;
      }

      var query_code = query.split("/").pop();
      var xhr = new XMLHttpRequest();
      var json_obj, status = false;
      xhr.open("GET", query, true);
      xhr.onload = function (e) {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              var json_obj = JSON.parse(xhr.responseText);
              var pattern = json_obj[query_code];
              console.log(pattern);
              var same = '';              
              for (const n in pattern){
                console.log(n["part"]);
                if (pattern[n]["part"] !== same){
                    partArr.push(n["part"]);
                    same = n["part"];
                }
              }
              console.log(partArr);
              status = true;
            } else {
              console.error(xhr.statusText);
            }
          }
        }.bind(this);
        xhr.onerror = function (e) {
          console.error(xhr.statusText);
        };
        xhr.send(null);

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
            </Grid>
            <Grid item xs={6}>
             <TodoApp />
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

  class TodoApp extends Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
      return (
        <div>
          <h3>Steps to Do</h3>
          <TodoList items={this.state.items} />
          <form onSubmit={this.handleSubmit}>

            <label htmlFor="new-todo">
              What needs to be done?
            </label>
            <input
              id="new-todo"
              onChange={this.handleChange}
              value={this.state.text}
            />
            <button>
              Add #{this.state.items.length + 1}
            </button>
          </form>
        </div>
      );
    }

    handleChange(e) {
      this.setState({ text: e.target.value });
    }

    handleSubmit(e) {
      e.preventDefault();
      if (this.state.text.length === 0) {
        return;
      }
      const newItem = {
        text: this.state.text,
        id: Date.now()
      };
      this.setState(state => ({
        items: state.items.concat(newItem),
        text: ''
      }));
    }
  }

  class TodoList extends Component {
    render() {
      return (
        <ul>
          {this.props.items.map(item => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      );
    }
  }

export default RowActionView;
