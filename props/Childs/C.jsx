import React, { useState } from 'react'

function C({value}) {
    console.log(value)
    let[A,setA]=useState(99)
  return (
    <div>
    {  <h3>This is in C comp{A} </h3>}
    </div>
  )
}

export default C
