import React, { useState } from 'react'

function A() {
   let [a,seta]= useState(0)
  return (
    <div>
      A<h3>{a}</h3>
    </div>
  )
}

export default A
    