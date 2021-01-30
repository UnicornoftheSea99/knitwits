import React from 'react';
/* design intentionally sucks so when we improve ui it's universal */
export default function PatternSelectScreen(){
    return(<div style={{margin:"10px"}}>
        <button style={{margin:"10px"}}>Knit Scarf</button>
        <button style={{margin:"10px"}}>Crochet Bee</button>
        <button style={{margin:"10px"}}>Knit Plushie</button>
        <button disabled style={{margin:"10px"}}>Custom Pattern</button>
        <form style={{margin:"10px"}}>
            <label for="custom-code"style={{margin:"10px"}}>Got a custom pattern code? Enter it here:</label>
            <input type="text" id="custom-code" name="custom-code"></input>
            <button style={{margin:"10px"}}>Submit</button>
        </form>
    </div>)
}