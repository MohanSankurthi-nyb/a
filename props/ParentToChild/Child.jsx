import React, { useState } from 'react'
import Parent from './Parent'

function Child() {
    let a = 19
    let [A,B]=useState(1000)
    console.log(A)
    console.log(B)
    function Increase(a){
        a++
        console.log(a)
    }
    let inc=()=>{
        B(A+1) 
    }
  return (
    <div>
      <Parent value={A}/>
      <button onClick={()=>{Increase(a)}}>Increase</button>
      <button onClick={inc}>Click in Parent</button>
    </div>
  )
}

export default Child
