//import logo from './logo.svg';
import './App.css';
import PatternSelectScreen from './PatternSelectScreen.jsx'
import RowActionView from './RowActionView.js'
import { SmallContext } from './small-context.js'
import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


class App extends Component {
  constructor(props){
    super(props);
    this.state={patternPicked: false, chosenPattern: '', // haha. beefault
    decideScarf: this.decideScarf.bind(this),
    decideBee: this.decideBee.bind(this),
    decidePlushie: this.decidePlushie.bind(this)};
  }

  decideScarf(){
    this.setState({patternPicked: true, chosenPattern: 'scarf'});
  }

  decideBee(){
    this.setState({patternPicked: true, chosenPattern: 'bee'});
  }

  decidePlushie(){
    this.setState({patternPicked: true, chosenPattern: 'plushie'});
  }

  render(){
    const picked = this.state.patternPicked;
    let view;
    view = (<PatternSelectScreen/>);
    if (picked) {view = (<RowActionView/>);}

    return (
      <div className="App" style={{backgroundColor:"wheat", color:"#404022"}}>
        <header className="App-header">
         <h1> KnitWits </h1>
         <img src={'./IMG_0069.png'} />
        </header>
        <SmallContext.Provider value={this.state}>
          {view}
        </SmallContext.Provider>
    </div>
  );
}
}

export default App;