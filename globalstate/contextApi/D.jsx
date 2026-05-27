import React, { useContext, useState } from 'react'
import G from './G'
import H from './H'
import { context } from './A'


function D() {
  let{a,seta}=useContext(context)
  return (
    <div>D
      <button onClick={()=>{seta(a+1)}}>Click</button>
     <h3>{a}</h3>
    </div>
  )
}

export default D
