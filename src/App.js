//import logo from './logo.svg';
import './App.css';
import PatternSelectScreen from './PatternSelectScreen.jsx'
import RowActionView from './RowActionView.js'
import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


class App extends Component {
  render(){
    // to be coded next:
    // if context contains button click record, generate RowActionView
    // else PatternSelectScreen. how did i do this w/project data 
  return (
    <div className="App" style={{backgroundColor:"wheat", color:"#404022"}}>
      <header className="App-header">
         <h1> KnitWits </h1>
         <img src={'./IMG_0069.png'} />
       </header>
       <PatternSelectScreen/>
      <RowActionView/>
    </div>
  );
}
}

export default App;