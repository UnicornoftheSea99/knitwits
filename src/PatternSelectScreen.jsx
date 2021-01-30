import React, { useContext } from 'react';
import { SmallContext } from './small-context.js'
/* design intentionally sucks so when we improve ui it's universal */
export default function PatternSelectScreen(){
    const myContext=useContext(SmallContext);
    // okay cool what do i do with my context now
    return(<div style={{margin:"10px"}}>
        <button onClick={myContext.decideScarf} style={{margin:"10px"}}>Knit Scarf</button>
        <button onClick={myContext.decideBee}style={{margin:"10px"}}>Crochet Bee</button>
        <button onClick={myContext.decidePlushie} style={{margin:"10px"}}>Knit Plushie</button>
        <button disabled style={{margin:"10px"}}>Custom Pattern</button>
        <form style={{margin:"10px"}}>
            <label for="custom-code"style={{margin:"10px"}}>Got a custom pattern code? Enter it here:</label>
            <input type="text" id="custom-code" name="custom-code"></input>
            <button style={{margin:"10px"}}>Submit</button>
        </form>
    </div>)
}
