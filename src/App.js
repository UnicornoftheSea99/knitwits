
import './App.css';
import PatternSelectScreen from './PatternSelectScreen.jsx';
import RowActionView from './RowActionView.js';
import { SmallContext } from './small-context.js';
import React, { Component } from 'react';
import AboutUs from './AboutUs.js';
import TodoApp from './ToDo.js';
import CustomPattern from "./CustomPattern.js"
import Button from '@material-ui/core/Button';
import Avatar from "@material-ui/core/Avatar";

class App extends Component {
  constructor(props){
    super(props);
    this.state={patternPicked: false, custom: false, curious: false, chosenPattern: '', // haha. beefault
    decideScarf: this.decideScarf.bind(this),
    decideBee: this.decideBee.bind(this),
    decidePlushie: this.decidePlushie.bind(this),
    customPattern: this.customPattern.bind(this),
    customPatternView:this.customPatternView.bind(this),
    aboutUs: this.aboutUs.bind(this),
    query:''};
  }

  decideScarf(){
    this.setState({patternPicked: true, chosenPattern: 'scarf',
    query:'https://api-dot-knitwits.ue.r.appspot.com/api/get/-7269468165908292738'});
    console.log("scarf!");
  }

  decideBee(){
    this.setState({patternPicked: true, chosenPattern: 'bee',
    query:'https://api-dot-knitwits.ue.r.appspot.com/api/get/-7378964869400283023'});
    console.log("bee!");
  }

  decidePlushie(){
    this.setState({patternPicked: true, chosenPattern: 'plushie',
    query:'https://api-dot-knitwits.ue.r.appspot.com/api/get/-4778850897406943288'});
    console.log("plushie!");
  }

  customPattern(){
    this.setState({patternPicked: true, custom: true})

  }
  customPatternView(queryArg){
    console.log("please clap")
    this.setState({patternPicked: true, query:"https://api-dot-knitwits.ue.r.appspot.com/api/get/"+queryArg});
    console.log("doing things?")
  }

  aboutUs(){
    this.setState({patternPicked: true, curious: true})
  }

  render(){
    const picked = this.state.patternPicked;
    const isCustom = this.state.custom;
    const isCurious = this.state.curious;

    let view;
    view = (<PatternSelectScreen/>);
    if (picked) {view = (<RowActionView/>);}
    if (picked && isCustom) {view= (<CustomPattern/>);}
    if (picked && isCurious) {view= (<AboutUs/>);}
    if (picked==false) {view= (<PatternSelectScreen/>);}

    return (
      <div className="App" style={{backgroundColor:"whitesmoke", color:"#404022"}}>
        <header className="App-header">
         <h1> KnitWits </h1>
        <Button
          startIcon={<Avatar src={'./IMG_0069.png'} 
          onClick={() => {this.setState({patternPicked: false})}}
          style={{ height: '115px', width: '130px' }}
          variant="square"></Avatar>}
          >
          </Button>
         {/* <img src={'./IMG_0069.png'} /> */}
         <SmallContext.Provider>
         </SmallContext.Provider>
        </header>
        <SmallContext.Provider value={this.state}>
          {view}
        </SmallContext.Provider>
    </div>
  );
}
}



export default App;
