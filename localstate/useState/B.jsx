import React, { useState } from 'react'

function B() {
    let [A,seta]=useState(10)
    let set=()=>{
        seta(A+1)
    }
  return (
    <div>
      B
      <h3>{A}</h3>
       <h3>A</h3>
       <button onClick={set}>click</button>
    </div>
  )
}

export default B
