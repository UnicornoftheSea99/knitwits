import './App.css';
import React, { createContext, useContext, Component } from 'react';
import { SmallContext } from './small-context.js';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
    formControl: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      marginRight: theme.spacing(2),
      minWidth: 120
    }}));

//const formCtrl = useStyles().formControl;

var isDrawn=false;

class RowActionView extends Component {
    static contextType = SmallContext;
    state = {
        instructions: [],
        query:"",
        current:0,
        partTypes:[''],
        rowMarks:[0],
        currentPart:''
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
          if (data[queryVal]){
            this.setState({instructions:JSON.parse(data[queryVal].replaceAll("\\\\", "\\")
                        .replaceAll("/", "of").replaceAll('"rows":1}', '"rows":1},')
                        .replaceAll('"rows":1},,', '"rows":1},')
                        .replaceAll('"rows":1},}', '"rows":1}}'))})
          }else{
            this.setState({instructions:{0:{part:"N/A", instructions:"This item does not exist in our database!",rows:"N/A"}}})
          }
        }
      )
       var same ='';

    }
    updateCurrent(newNum){
      this.setState({current: newNum})
    }
    constructor(props) {
        super(props);
        this.updateCurrent = this.updateCurrent.bind(this);
        this.saveProgress = this.saveProgress.bind(this);
        this.stateInit = this.stateInit.bind(this);
      }

    getRows(){
      var part =  this.state.currentPart;
      var preIndex = this.state.partTypes.indexOf(this.state.currentPart);
      if (part === ''){ preIndex = 1;}
      console.log(preIndex);
      console.log(this.state.rowMarks);
      var newNum = this.state.rowMarks[preIndex];
      console.log(newNum);
      console.log(this.state.instructions[newNum]);
      var rows = this.state.instructions[newNum].rows;
      return rows;
    }

    saveProgress(event){
        var part =  this.state.currentPart;
        var preIndex = this.state.partTypes.indexOf(this.state.currentPart);
        if (part === ''){ preIndex = 1;}
        console.log(preIndex);
        var tempArr = []
        tempArr.push(...this.state.rowMarks); // didn't copy the array nicely aaaaaaaaaaaaaa
        tempArr[preIndex]=this.state.current.toString();
        console.log([tempArr]);
        this.setState({rowMarks:tempArr}); 
        this.setState({currentPart: event.target.value});
        console.log(event.target.value);
        var index = this.state.partTypes.indexOf(event.target.value);
        console.log(this.state.rowMarks);
        console.log(index);
        var newNum = this.state.rowMarks[index];
        console.log(newNum);
        this.updateCurrent(newNum);
    }

    stateInit(){
        this.setState({currentPart: ' '});
    }

    render(){
        var same = '';
        //if(isDrawn == false){
            for (const key in this.state.instructions){
                if (this.state.partTypes.indexOf(this.state.instructions[key].part) < 0){
                        this.state.partTypes.push(this.state.instructions[key].part);
                        this.state.rowMarks.push(key);
                        same = this.state.instructions[key].part;
                        console.log(this.state.rowMarks);
                }
            }
            isDrawn=true;
        //}

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
                                value={this.state.currentPart}
                                onChange={this.saveProgress}
                            >
                                {this.state.partTypes.map(type => (<option value={type}>{type}</option>))}
                            </Select>
                </FormControl>
             </div>
             <h3>{this.state.currentPart}</h3>
              <Counter updateCurrent={this.updateCurrent} rowsLeft={
                //((this.getRows()!== undefined)) ? this.getRows() : 
                0}/>
              {
                ((this.state.instructions[this.state.current]!== undefined) && this.state.current>=0) ? "Current Instruction: "+this.state.instructions[this.state.current].instructions : "Out of range"
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
      this.state = { count: 0, left: this.props.rowsLeft};
      console.log("hello from counter!");
      console.log(this.state.left);
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
