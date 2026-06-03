import React, { useReducer } from 'react'
  
let data={
    count:0
}
function countReducer (state,action){
    switch(action.type){
        case "Inc":
            return {count:state.count+1}
            case "Dec":
                return {count:state.count-1}
            default:
                return state;
    }
    
}
function A() {
    let [a,seta]=useReducer(countReducer,data)
    console.log(a)
  return (
    <div>
        <button onClick={()=>{seta({type:"Inc"})}}>Inc</button>
        <button onClick={()=>{seta({type:"Dec"})}}>Dec</button>


    </div>
  )
}

export default A
//hook-> predefined function