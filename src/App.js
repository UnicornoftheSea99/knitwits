//import logo from './logo.svg';
import './App.css';
import PatternSelectScreen from './PatternSelectScreen.jsx';
import RowActionView from './RowActionView.js';
import { SmallContext } from './small-context.js';
import React, { Component } from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import AboutUs from './AboutUs.js';


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
    console.log("scarf!");
  }

  decideBee(){
    this.setState({patternPicked: true, chosenPattern: 'bee'});
    console.log("bee!");
  }

  decidePlushie(){
    this.setState({patternPicked: true, chosenPattern: 'plushie'});
    console.log("plushie!");
  }



  render(){
    const picked = this.state.patternPicked;
    let view;
    view = (<PatternSelectScreen/>);
    if (picked) {view = (<RowActionView/>);}

    return (
      // <div className="App" style={{backgroundColor:"wheat", color:"#404022"}}>
      <div className="App" style={{backgroundColor:"whitesmoke", color:"#404022"}}>
        <header className="App-header">
         <h1> KnitWits </h1>
         <img src={'./IMG_0069.png'} />
         {/* <Breadcrumb1 /> */}
        </header>
        <SmallContext.Provider value={this.state}>
          {view}
        </SmallContext.Provider>
        <AboutUs />
    </div>
  );
}
}

// function handleClick(event) {
//   event.preventDefault();
//   console.info('You clicked a breadcrumb.');
// }

// class Breadcrumb1 extends Component {
  
//   render() {
//   return (
//     <Breadcrumbs aria-label="breadcrumb">
//       <Link color="inherit" href="/" onClick={handleClick}>
//         Home
//       </Link>
//       {/* <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
//         Core
//       </Link> */}
//       <Link
//         color="textPrimary"
//         href="/components/breadcrumbs/"
//         onClick={handleClick}
//         aria-current="page"
//       >
//         Crochet Bee
//       </Link>
//     </Breadcrumbs>
//   );
// }
// }

export default App;