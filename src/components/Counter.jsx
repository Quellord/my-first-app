import { useState } from "react"

const Counter = ()=>{
    let [count,setCount]=useState(0);
    const butt_Style ={
        margin:"1em",
        padding:"0.5em",
        width:"90px"
    }
    // state define karta haiki ye object change hota hai on certain way
    // hume js ki tarah baar baar doc.textaelement ya else update nhi karna padta hai
    return <div style={{textAlign:"center",padding:"1em"}}>
    <h1>Count : {count}</h1>
    <input type="button"  style={butt_Style} value="Increment" onClick={()=>setCount(count+1)} />
    <input type="button" style={butt_Style} value="Decrement" onClick={()=>setCount(count-1)} />
    <input type="button" style={butt_Style} value="Reset" onClick={()=>setCount(0)} />
    </div>
}

export default Counter