import React, { useState } from 'react'

function Parent(props) {
    console.log(props)
    let [a,seta]=useState(99)
    console.log(a,seta)
    let increase=()=>{
      seta(a+1)
    }
  return (
    <div>
      <button onClick={increase}>Increase Parent{a}</button>
      {props.value }
    </div>
  )
}
 
export default Parent
