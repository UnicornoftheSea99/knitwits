import React, { createContext, Component } from 'react';

class CustomPattern extends Component{
  constructor(props){
    super(props);
    this.state = {currRow:0,
                  instructions:{}}
  }
  formAction (e){
    e.preventDefault();
    const formData = new FormData(e.target),
    formDataObj = Object.fromEntries(formData.entries())
    console.log(formDataObj)
  }
  render(){
    return (
        <div>
        <form style={{margin:"10px"}} onSubmit={this.formAction}>
          <label for="part"style={{margin:"10px"}}>Which part?</label>
          <input type="text" id="part" name="part"></input>

          <label for="rows"style={{margin:"10px"}}>How many rows?</label>
          <input type="text" id="rows" name="rows"></input>

          <label for="instructions"style={{margin:"10px"}}>Instructions?</label>
          <input type="text" id="instructions" name="instructions"></input>
          <button style={{margin:"10px"}}>Submit</button>

         </form>

        </div>
      );

  }
}

export default CustomPattern;
