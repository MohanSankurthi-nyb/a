import React, { useContext, useState } from 'react'
import { context } from './A'

function I() {
  //console.log(context)
  let {a,seta}=useContext(context)
  
  return (
    <div>
       I <h3>this is the value from A{a}</h3>
       <button onClick={()=>{seta(a+1)}}>click</button>
       <button onClick={()=>{seta(a-1)}}>click</button>

    </div>
  )
}

export default I


