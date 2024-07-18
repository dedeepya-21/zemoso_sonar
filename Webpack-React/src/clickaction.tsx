import { useState } from "react";

export const ClickAction =()=>{
    const[count,setCount]=useState(0)
    return(
        <div>
            <button onClick={()=>setCount(count+1)}>Count {count}</button>
        </div>
    )
}