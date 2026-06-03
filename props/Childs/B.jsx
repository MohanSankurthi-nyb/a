import React, { useState } from 'react'
import C from './C'

function B({value}) {
    console.log(value)
    let[A,setA]=useState(99)
  return (
    <div>
      <h3>This is in B comp{value} </h3>
     { <C/> }
    </div>
  )
}

export default B
