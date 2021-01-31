import React, { createContext, Component } from 'react';

class CustomPattern extends Component{
  constructor(props){
    super(props);
    this.state = {currRow:0,
                  instructions:{}
                }
    this.formAction = this.formAction.bind(this);
    this.postToWeb = this.postToWeb.bind(this);
  }
  formAction (e){
    e.preventDefault();
    var formData = new FormData(e.target)
    formData = Object.fromEntries(formData.entries())
    var newInstructions = Object.assign({}, this.state.instructions)
    newInstructions[this.state.currRow] = formData;
    this.setState({instructions:newInstructions});
    this.setState({currRow:this.state.currRow+1})
  }
  postToWeb(props){
    console.log(this.state.instructions)
  }

  render(){
    return (
        <div>
        {
          Object.keys(this.state.instructions).map(item =>
            <p><b>{item}</b> {this.state.instructions[item]["part"]} {this.state.instructions[item]["instructions"]} {this.state.instructions[item]["rows"]}</p>
          )
        }
        <form style={{margin:"10px"}} onSubmit={this.formAction}>
          <label for="part"style={{margin:"10px"}}>Which part?</label>
          <input type="text" id="part" name="part" ></input><br />

          <label for="rows"style={{margin:"10px"}}>How many rows?</label>
          <input type="text" id="rows" name="rows" ></input><br />

          <label for="instructions"style={{margin:"10px"}}>Instruction for this row?</label>
          <input type="text" id="instructions" name="instructions" ></input><br />
          <button style={{margin:"10px"}}>Add to Pattern</button><br />
         </form>
         <button style={{margin:"10px"}} onClick={this.postToWeb}>Post to the web!</button><br />

        </div>
      );

  }
}

export default CustomPattern;
