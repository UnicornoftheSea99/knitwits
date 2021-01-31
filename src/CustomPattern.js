import React, { createContext, Component } from 'react';

class CustomPattern extends Component{
  constructor(props){
    super(props);
    this.state = {currRow:0,
                  instructions:{},
                  topPost:"None so far"
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
  async postToWeb(props){
    console.log(this.state.instructions)
    var myForm = new FormData
    myForm.append("pattern", JSON.stringify(this.state.instructions));
    const response = await fetch("https://knitwits.ue.r.appspot.com/api/post/", {
      method: "POST",
      body: myForm
    });
    const content = await response.json();
    console.log(content.hashVal);
    this.setState({topPost:content.hashVal})
  }

  render(){
    return (
        <div>
        {
          Object.keys(this.state.instructions).map(item =>
            <p><b>Row: {item}</b> {this.state.instructions[item]["part"]} {this.state.instructions[item]["instructions"]} {this.state.instructions[item]["rows"]}</p>
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
         <h2>Your Hash Value</h2>
         {this.state.topPost}
        </div>
      );

  }
}

export default CustomPattern;
