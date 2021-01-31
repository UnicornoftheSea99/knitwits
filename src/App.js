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
    decidePlushie: this.decidePlushie.bind(this),
    query:''};
  }

  decideScarf(){
    this.setState({patternPicked: true, chosenPattern: 'scarf',
    query:'https://knitwits.ue.r.appspot.com/api/get/-193436168588079716'});
    console.log("scarf!");
  }

  decideBee(){
    this.setState({patternPicked: true, chosenPattern: 'bee',
    query:'https://knitwits.ue.r.appspot.com/api/get/-7378964869400283023'});
    console.log("bee!");
  }

  decidePlushie(){
    this.setState({patternPicked: true, chosenPattern: 'plushie',
    query:'https://knitwits.ue.r.appspot.com/api/get/-4778850897406943288'});
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
         <SmallContext.Provider>
           {/* <Breadcrumb1 /> */}
         </SmallContext.Provider>
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
//   static contextType = SmallContext;
//   render() {
//      let context = this.context;
//   return (
//     <Breadcrumbs aria-label="breadcrumb">
//       <Link color="inherit" href="/" onClick={context.whateverFn()}>
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