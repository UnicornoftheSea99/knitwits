import './App.css';
import React, { createContext, useContext, Component } from 'react';
import { SmallContext } from './small-context.js';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

/*async grabPattern = query => {
    let response = await fetch(query, {method: 'GET', redirect: 'follow'});
    if (response.ok) { // if HTTP-status is 200-299
    // get the response body (the method explained below)
    let json = await response.json();
  } else {
    alert("HTTP-Error: " + response.status);
  }};*/
var partArr = [''];
const useStyles = makeStyles((theme) => ({
    formControl: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      marginRight: theme.spacing(2),
      minWidth: 120
    }}));

//const formCtrl = useStyles().formControl;

class RowActionView extends Component {
    static contextType = SmallContext;
    state = {
        instructions: [],
        query:"",
        current:0
      }
    componentDidMount (){
        let context = this.context;
        var query = context.query;
        console.log(query);
        var queryVal = query.split("/").pop();
        this.setState({query:query})

      fetch(query)
      .then(res => res.json())
      .then((data) =>{
          this.setState({instructions:JSON.parse(data[queryVal].replaceAll("\\\\", "\\")
                      .replaceAll("/", "of").replaceAll('"rows":1}', '"rows":1},')
                      .replaceAll('"rows":1},,', '"rows":1},')
                      .replaceAll('"rows":1},}', '"rows":1}}'))})
        }
      )
    }
    updateCurrent(newNum){
      this.setState({current: newNum})
    }
    constructor(props) {
        super(props);
        this.updateCurrent = this.updateCurrent.bind(this)
      }
    render(){
        var types = ['Legs that are Also Arms', 'Arms that are Also Legs'];
        return(<Grid container spacing={3}>
            <Grid item xs={12}>
            </Grid>
            <Grid item xs={6}>
              <div style={{margin:"20px"}}>
                <FormControl variant="outlined" fullWidth={true}>
                    <InputLabel id="partDropdownLabel" htmlFor="partDropdown"> Parts </InputLabel>
                            <Select
                                autoWidth
                                labelId="partDropdownLabel"
                                id="partDropdown"
                                name="partDropdown"
                            >
                                {types.map(type => (<option value={type}>{type}</option>))}
                            </Select>
                </FormControl>
             </div>
              <Counter updateCurrent={this.updateCurrent}/>
              <b>Current instruction</b><br />
              {
                this.state.current>=0 ? JSON.stringify(this.state.instructions[this.state.current]) : "Out of range"
              }
            </Grid>
            <Grid item xs={6}>

            <a target="_blank" href={this.state.query.replace("get", "pdf")}>Printer friendly version</a>

             {
               Object.keys(this.state.instructions).map(item =>
                <p><b>{item}</b> {this.state.instructions[item]["part"]} {this.state.instructions[item]["instructions"]} {this.state.instructions[item]["rows"]}</p>
               )
             }

            </Grid>
          </Grid>
        );
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
      this.props.updateCurrent(this.state.count);
    };
    minusClick = () => {
      this.setState(({ count,left }) => ({
        count: count - 1,
        left: left +1
      }));
      this.props.updateCurrent(this.state.count);
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
