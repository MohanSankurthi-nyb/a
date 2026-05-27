import React, { useState } from 'react'
import I from './I'

function H({value}) {
    
  return (
    <div>H
        <I value={value}/>
          {/*  <h3>This is the value from H comp from D{props.value}</h3>*/}
      {/* <I/> */}
    </div>
  )
}

export default H
